import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Beer} from "../../shared/models/beer";
import {BeersService} from "../../shared/services/beers.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BeerStyles} from "../../shared/models/beerStyles";

@Component({
  selector: 'app-create-beer',
  templateUrl: './create-beer.component.html',
  styleUrls: ['./create-beer.component.css']
})
export class CreateBeerComponent implements OnInit{
  form: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    style: new FormControl(),
    price: new FormControl()
  })

  beerStyles = Object.values(BeerStyles);
  editMode: boolean = false;
  currentBeerId: string | undefined

  constructor(
    private beersService: BeersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentBeerId = params.get('id')!;
      if (this.currentBeerId) {
        this.editMode = true;
        this.beersService.getById(this.currentBeerId).subscribe((beer: Beer) => {
          this.form.setValue({
            name: beer.beerName,
            style: beer.beerStyle,
            price: beer.price
          });
        });
      }
    })
  }

  onSubmit() {
    const beer = this.constructBeer()
    if (this.editMode) {
      beer.id = this.currentBeerId
      this.beersService.updateBeer(beer).subscribe(() => {
        this.router.navigate(['/beers'])
      })
    } else {
      this.beersService.createBeer(beer).subscribe(() => {
        this.router.navigate(['/beers'])
      })
    }
  }

  private constructBeer(): Beer {
    const beer = new Beer()
    beer.beerName = this.form.get('name')?.value
    beer.beerStyle = this.form.get('style')?.value
    beer.price = this.form.get('price')?.value
    beer.upc = this.createRandomUpc()
    return beer
  }

  private createRandomUpc(): string {
    const min = 1000000
    const max = 100000000
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  }
}

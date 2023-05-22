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
    price: new FormControl('',
      [Validators.min(1),
        Validators.max(100),
        Validators.required])
  })

  beerStyles = Object.values(BeerStyles);
  editMode: boolean = false;
  currentBeer: Beer | undefined

  constructor(
    private beersService: BeersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const beerId = params.get('id');
      if (beerId) {
        this.editMode = true;
        this.beersService.getById(beerId).subscribe((beer: Beer) => {
          this.currentBeer = beer
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
      this.beersService.updateBeer(beer, this.currentBeer?.id!).subscribe(() => {
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
    beer.upc = this.currentBeer ? beer.upc = this.currentBeer.upc : this.createRandomUpc()
    return beer
  }

  private createRandomUpc(): string {
    const min = 1000000
    const max = 100000000
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  }
}

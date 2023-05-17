import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Beer} from "../../shared/models/beer";
import {BeersService} from "../../shared/services/beers.service";
import {Router} from "@angular/router";
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

  constructor(
    private beersService: BeersService,
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    const beer = new Beer()
    beer.beerName = this.form.get('name')?.value
    beer.beerStyle = this.form.get('style')?.value
    beer.price = this.form.get('price')?.value
    beer.upc = this.createRandomUpc()
    console.log(beer)
    this.beersService.createBeer(beer).subscribe(() => {
      this.router.navigate(['/beers'])
    })
  }

  createRandomUpc(): string {
    const min = 1000000
    const max = 100000000
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  }
}

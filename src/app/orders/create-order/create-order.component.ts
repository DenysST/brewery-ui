import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BeersService} from "../../shared/services/beers.service";
import {Beer} from "../../shared/models/beer";
import {OrdersService} from "../../shared/services/orders.service";
import {BeerOrderLine} from "../../shared/models/beerOrderLine";
import {BeerOrder} from "../../shared/models/beerOrder";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  beers: Beer[] = []
  selectedBeers: Beer[] = [];
  test = 1


  constructor(
    private beerService: BeersService,
    private orderService: OrdersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.beerService.getBeersList().subscribe(response => {
      response.content ? this.beers = response.content : []
    })
  }

  selectBeer(beer: Beer) {
    if (beer.selectedQuantity < 0 || beer.selectedQuantity > 100) {
      beer.selectedQuantity = 0
      return
    }
    const index = this.selectedBeers.indexOf(beer);
    if (index === -1) {
      this.selectedBeers.push(beer);
    } else if (beer.selectedQuantity === 0) {
      this.selectedBeers.splice(index, 1);
    } else {
      this.selectedBeers[index] = beer
    }
  }

  saveOrder() {
    const beerOrder = this.createBeerOrder()
    console.log(this.selectedBeers)
    this.orderService.saveOrder(beerOrder).subscribe(() => {
      this.router.navigate(['/orders'])
    })
  }

  private createBeerOrder(): BeerOrder {
    const orderLine: BeerOrderLine[] = []
    this.selectedBeers.forEach(beer => {
      let beerOrderLine = new BeerOrderLine()
      beerOrderLine.beerId = beer.id
      beerOrderLine.upc = beer.upc
      beerOrderLine.beerName = beer.beerName
      beerOrderLine.beerStyle = beer.beerStyle
      beerOrderLine.price = beer.price
      beerOrderLine.orderQuantity = beer.selectedQuantity
      orderLine.push(beerOrderLine)
    })
    const beerOrder = new BeerOrder()
    beerOrder.customerId = this.orderService.customerId
    beerOrder.beerOrderLines = orderLine
    return beerOrder
  }

  changeBeerQuantity(beer: Beer) {
    const index = this.selectedBeers.indexOf(beer);
    if (index !== -1) {
      this.selectedBeers[index].selectedQuantity = beer.selectedQuantity
    }
  }
}

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
    const index = this.selectedBeers.indexOf(beer);
    if (index === -1) {
      this.selectedBeers.push(beer);
    } else {
      this.selectedBeers.splice(index, 1);
    }
  }

  saveOrder() {
    const beerOrder = this.createBeerOrder()
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
    beerOrder.customerId = '98204459-b2b3-44b2-a937-6f7ca0920378'
    beerOrder.beerOrderLines = orderLine
    return beerOrder
  }
}

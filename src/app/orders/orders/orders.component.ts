import {Component, OnInit} from '@angular/core';
import {BeersService} from "../../shared/services/beers.service";
import {OrdersService} from "../../shared/services/orders.service";
import {BeerOrder} from "../../shared/models/beerOrder";
import {CustomerService} from "../../shared/services/customer.service";
import {first, map} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  beerOrders: BeerOrder[] = []

  constructor(
    private ordersService: OrdersService,
    private router: Router) {
  }
  ngOnInit(): void {
    this.ordersService.getOrders().subscribe(response => {
      this.beerOrders = response.content ? response.content : []
    })
  }


  navigateToAddOrder() {
    this.router.navigate(['/add-order'])
  }
}

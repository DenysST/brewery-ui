import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BeersService} from "../../shared/services/beers.service";
import {BeerOrder} from "../../shared/models/beerOrder";
import {OrdersService} from "../../shared/services/orders.service";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{
  order!: BeerOrder
  totalPrice = 0

  constructor(private route: ActivatedRoute,
              private ordersService: OrdersService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const orderId = params.get('id');
      this.ordersService.getById(orderId!).subscribe(order => {
        this.order = order
        this.order.beerOrderLines?.forEach((order) => {
          this.totalPrice += order.orderQuantity! * order.price!
        })
        console.log(order)
      })

    });
  }

  onCancel(id: string) {
    this.ordersService.cancelOrder(id).subscribe(() => {
      this.router.navigate(['/orders'])
    })
  }
}

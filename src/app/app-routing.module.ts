import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BeersComponent} from "./beers/beers.component";
import {OrdersComponent} from "./orders/orders.component";
import {HomeComponent} from "./home/home.component";
import {CreateBeerComponent} from "./beers/create-beer/create-beer.component";
import {CreateOrderComponent} from "./orders/create-order/create-order.component";
import {BeerDetailsComponent} from "./beers/beer-details/beer-details.component";
import {OrderDetailsComponent} from "./orders/order-details/order-details.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'beers', component: BeersComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'add-beer', component: CreateBeerComponent},
  {path: 'add-order', component: CreateOrderComponent},
  {path: 'beer/:id', component: BeerDetailsComponent},
  {path: 'order/:id', component: OrderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

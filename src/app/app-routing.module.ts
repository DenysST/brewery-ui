import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BeersComponent} from "./beers/beers/beers.component";
import {OrdersComponent} from "./orders/orders/orders.component";
import {HomeComponent} from "./home/home.component";
import {CreateBeerComponent} from "./create-beer/create-beer/create-beer.component";
import {CreateOrderComponent} from "./create-order/create-order/create-order.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'beers', component: BeersComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'add-beer', component: CreateBeerComponent},
  {path: 'add-order', component: CreateOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

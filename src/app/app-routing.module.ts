import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BeersComponent} from "./beers/beers.component";
import {OrdersComponent} from "./orders/orders.component";
import {HomeComponent} from "./home/home.component";
import {CreateBeerComponent} from "./beers/create-beer/create-beer.component";
import {CreateOrderComponent} from "./orders/create-order/create-order.component";
import {BeerDetailsComponent} from "./beers/beer-details/beer-details.component";
import {OrderDetailsComponent} from "./orders/order-details/order-details.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./shared/services/auth.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'beers', component: BeersComponent, canActivate: [AuthGuard]},
  {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
  {path: 'add-beer', component: CreateBeerComponent, canActivate: [AuthGuard]},
  {path: 'add-beer/:id', component: CreateBeerComponent, canActivate: [AuthGuard]},
  {path: 'add-order', component: CreateOrderComponent, canActivate: [AuthGuard]},
  {path: 'beer/:id', component: BeerDetailsComponent, canActivate: [AuthGuard]},
  {path: 'order/:id', component: OrderDetailsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

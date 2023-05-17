import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersComponent } from './beers/beers/beers.component';
import {HttpClientModule} from "@angular/common/http";
import { OrdersComponent } from './orders/orders/orders.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateBeerComponent } from './create-beer/create-beer/create-beer.component';
import { CreateOrderComponent } from './create-order/create-order/create-order.component';

@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    OrdersComponent,
    HomeComponent,
    CreateBeerComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

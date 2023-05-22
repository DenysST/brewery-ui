import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersComponent } from './beers/beers.component';
import {HttpClientModule} from "@angular/common/http";
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateBeerComponent } from './beers/create-beer/create-beer.component';
import { CreateOrderComponent } from './orders/create-order/create-order.component';
import {DatePipe} from "@angular/common";
import { BeerDetailsComponent } from './beers/beer-details/beer-details.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import {EnumFormatPipe} from "./shared/pipes/enumFormatPipe";

@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    OrdersComponent,
    HomeComponent,
    CreateBeerComponent,
    CreateOrderComponent,
    BeerDetailsComponent,
    OrderDetailsComponent,
    EnumFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DatePipe
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

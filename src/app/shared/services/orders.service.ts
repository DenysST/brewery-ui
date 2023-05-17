import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {PagedResponse} from "../models/pagedRespose";
import {Beer} from "../models/beer";
import {BeerOrder} from "../models/beerOrder";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private url = 'http://localhost:8081/api/v1/customers/98204459-b2b3-44b2-a937-6f7ca0920378/orders'

  constructor(private httpService: HttpService) { }

  getOrders() {
    return this.httpService.getData(this.url)
  }

  getCustomerById(id: string) {
    return this.httpService.getData('http://localhost:8081/api/v1/customers/' + id)
  }
}

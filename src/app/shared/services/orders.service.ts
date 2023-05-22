import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {BeerOrder} from "../models/beerOrder";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private url = '/api/v1/customers'
  customerId = '87504ee2-ff01-4099-80eb-6e80fbd01134'

  constructor(private httpService: HttpService) { }

  getOrders() {
    return this.httpService.getData(`${this.url}/${this.customerId}/orders`)
  }

  saveOrder(beerOrder: BeerOrder) {
    return this.httpService.postData(beerOrder, `${this.url}/${this.customerId}/orders`)
  }

  getById(id: string) {
    return this.httpService.getData(`${this.url}/${this.customerId}/orders/${id}`)
  }

  cancelOrder(id: string) {
    return this.httpService.putData(`${this.url}/${this.customerId}/orders/${id}/cancel`, {})
  }

  getCustomers() {
    return this.httpService.getData(this.url)
  }

  setCustomerId(customerId: string) {
    this.customerId = customerId
  }
}

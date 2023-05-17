import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {PagedResponse} from "../models/pagedRespose";
import {BeerOrder} from "../models/beerOrder";
import {Customer} from "../models/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private httpService: HttpService) { }

  getCustomerById(id: string) {
    return this.httpService.getData('http://localhost:8081/api/v1/customers/' + id)
  }
}

import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Beer} from "../models/beer";

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  private beersUrl = '/api/v1/beer'
  constructor(private httpService: HttpService) { }

  getBeersList() {
    return this.httpService.getData(`${this.beersUrl}?showInventoryOnHand=true`)
  }

  getById(beerId: string) {
    return this.httpService.getData(`${this.beersUrl}/${beerId}?showInventoryOnHand=true`)
  }

  createBeer(beer: Beer) {
    return this.httpService.postData(beer, this.beersUrl)
  }

  updateBeer(beer: Beer, beerId: string){
    return this.httpService.putData(`${this.beersUrl}/${beerId}`, beer)
  }

  deleteById(id: string) {
    return this.httpService.deleteData(`${this.beersUrl}/${id}`)
  }

}

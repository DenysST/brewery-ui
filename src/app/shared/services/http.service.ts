import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  basicUrl = 'http://localhost:9090'

  constructor(private http: HttpClient) {}

  getData(endpoint: string): Observable<any> {
    return this.http.get(this.basicUrl + endpoint);
  }

  postData(data: any, endpoint: string): Observable<any> {
    return this.http.post(this.basicUrl + endpoint, data);
  }

  deleteData(endpoint: string) {
    return this.http.delete(this.basicUrl + endpoint)
  }

  putData(endpoint: string, body: any) {
    return this.http.put(this.basicUrl + endpoint, body)
  }
}

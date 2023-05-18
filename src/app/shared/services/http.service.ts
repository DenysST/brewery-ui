import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  getData(url: string): Observable<any> {
    return this.http.get(url);
  }

  postData(data: any, url: string): Observable<any> {
    return this.http.post(url, data);
  }

  deleteData(url: string) {
    return this.http.delete(url)
  }

  putData(url: string, body: any) {
    return this.http.put(url, body)
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService<T> {
  private apiUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) {}

  getData(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`);
  }

  postData(data: T, endpoint: string): Observable<any> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, data);
  }
}

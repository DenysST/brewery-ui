import { Injectable } from '@angular/core';
import {AuthResponse} from "../models/authResponse";
import {User} from "../models/user";
import {HttpService} from "./http.service";
import {catchError, Observable, Subject, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public error$: Subject<string> = new Subject<string>()

  constructor(private http: HttpService) {}

  get token(): string | null {
    return localStorage.getItem('token')
  }

  login(user: User): Observable<any>{
    user.returnSecureToken = true
    return this.http.postData(user, "/api/v1/auth/authenticate")
      .pipe(
        catchError(this.handleError.bind(this))
      )
  }

  logout() {
    this.setToken(null)
    return !!this.token
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  setToken(response: AuthResponse | null) {
    if (response) {
      localStorage.setItem('token', response.token)
    } else {
      localStorage.clear()
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 403) {
      this.error$.next("Incorrect email or password")
    }

    return throwError(error)
  }
}

import { Component } from '@angular/core';
import {AuthService} from "./shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brewery-ui';
  constructor(public auth: AuthService,
              private router: Router) {
  }

  logout() {
    this.auth.logout()
    this.router.navigate([''])
  }
}

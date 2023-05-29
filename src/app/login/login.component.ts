import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../shared/services/auth.service";
import {User} from "../shared/models/user";
import {AuthResponse} from "../shared/models/authResponse";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  constructor(private router: Router,
              public authService: AuthService) {}


  ngOnInit(): void {
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.authService.login(user).subscribe((response: AuthResponse) => {
      this.authService.setToken(response)
      this.form.reset()
      this.router.navigate(['/beers'])
    });
  }
}

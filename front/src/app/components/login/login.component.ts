import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private router: Router, private authService: AuthService) { }
  username;
  ngOnInit(): void {
    if(this.authService.isLoggedIn===true){
      this.username = this.authService.username;
      this.router.navigateByUrl(`/mainPage/${this.username}`);
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onLogIn(form): void{
    this.authService.login(form.value).subscribe(res => {
      this.authService.isLoggedIn = true;
      this.username = this.authService.username;
      this.router.navigateByUrl(`/mainPage/${this.username}`);
    })
  }

}

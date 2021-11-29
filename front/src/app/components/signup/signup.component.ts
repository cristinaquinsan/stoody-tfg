import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserI } from '../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  motherlang = new FormControl();
  studlangs = new FormControl('', Validators.required);
  languageList: string[] = ['Mandarin Chinese', 'Spanish', 'English','German', 'Portugesse', 'Arabic', 'Russian', 'Japanese', 'Korean'];
  username;
  constructor(private router: Router, private authService: AuthService) { }
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

  onSignUp(form): void{
    console.log(form.value);
    this.authService.signup(form.value).subscribe(res => {
      this.authService.isLoggedIn = true;
      this.username = this.authService.username;
      this.router.navigateByUrl(`/mainPage/${this.username}`);
    })
  }


}

import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;
  userForm!: FormGroup;
  languageList: string[] = ['Mandarin Chinese', 'Spanish', 'English', 'German', 'Portugesse', 'Arabic', 'Russian', 'Japanese', 'Korean'];
  username;
  constructor(private router: Router, private authService: AuthService, public fb: FormBuilder, private ngZone: NgZone) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn === true) {
      this.username = this.authService.username;
      this.router.navigateByUrl(`/mainPage/${this.username}`);
    }
    this.submitUserForm();
  }

  submitUserForm() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      passwd: ['', [Validators.required]],
      motherlang: ['', []],
      studlangs: ['', []]
    });
  }

  onSignUp(): void {
    if (this.userForm.valid) {
      this.authService.signup(this.userForm.value).subscribe(res => {
        this.authService.isLoggedIn = true;
        this.username = this.authService.username;
        this.ngZone.run(() => this.router.navigateByUrl(`/mainPage/${this.username}`));
      })
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  };

}

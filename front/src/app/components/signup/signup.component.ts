import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Language {
  name: string;
  greet: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  languages = new FormControl();
  mothert = new FormControl('', Validators.required);
  languageList: Language[] = [
    {name: 'Mandarin Chinese', greet: '你好!'},
    {name: 'Spanish', greet: '¡Hola!'},
    {name: 'English', greet: 'Hi!'},
    {name: 'German', greet: 'Hallo!'},
    {name: 'Portugesse', greet: 'Olá!'},
    {name: 'Arabic', greet: '!مرحبا'},
    {name: 'Russian', greet: 'Привет!'},
    {name: 'Japanese', greet: 'こんにちは!'},
    {name: 'Korean', greet: '안녕하세요!'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


}

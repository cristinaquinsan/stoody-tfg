import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordI } from 'src/app/models/word';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-adding-word',
  templateUrl: './adding-word.component.html',
  styleUrls: ['./adding-word.component.css']
})
export class AddingWordComponent implements OnInit {

  words:WordI[] = [];

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn===false){
      this.router.navigateByUrl('/mainPage');
    }
  }

  addWord(form):void{
    console.log(form.value);
    this.words.push(form.value);
    console.log(this.words);
    //this.getWords();
  }

  /*getWords(): Array<WordI> {
    return this.words;
  }*/

}

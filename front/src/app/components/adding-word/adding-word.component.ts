import { Component, OnInit } from '@angular/core';
import { WordI } from 'src/app/models/word';
@Component({
  selector: 'app-adding-word',
  templateUrl: './adding-word.component.html',
  styleUrls: ['./adding-word.component.css']
})
export class AddingWordComponent implements OnInit {

  words:Array<WordI>;

  constructor() { }

  ngOnInit(): void {
  }

  addWord(form):void{
    console.log("Clicked on add word");
    this.getWords();
  }

  getWords(): Array<WordI> {
    return this.words;
  }

}

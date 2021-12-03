import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitI } from 'src/app/models/unit';
import { WordI } from 'src/app/models/word';
import { AuthService } from 'src/app/services/auth.service';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'app-study-zone',
  templateUrl: './study-zone.component.html',
  styleUrls: ['./study-zone.component.css']
})
export class StudyZoneComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private unitsService: UnitsService, private ngZone: NgZone, private activatedRoute: ActivatedRoute) { }  
  
  hint= false; 
  back= false;

  words: WordI[] = [];
  unitname!: string;
  unit: UnitI;
  frontWord!: string;
  backWord!: string;
  hintSentence!: string;
  indexWord: number = 0;

  ngOnInit(): void {
    if(this.authService.isLoggedIn===false){
      this.router.navigateByUrl('/login');
    }
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.unitsService.getUnit(id!).subscribe((data) => {
      this.unit = data;

      if (this.unit.words.length > 0)
      {
        if (this.unit.words[this.indexWord].feedback == 0) {
          this.getWords(this.indexWord);
        } else {
          this.unit.words[this.indexWord].feedback--;
          this.indexWord += 1;
          this.getWords(this.indexWord);
        }
      }
    });
  }

  showHint():void{
    this.hint = true;
  }

  showBack():void{
    this.back = true;
  }

  goodFeedback() {
    this.hint = false;
    this.back = false;
    this.modifyFeedback(4);
  }

  sortOfFeedback() {
    this.hint = false;
    this.back = false;
    this.modifyFeedback(2);
  }

  badFeedback() {
    this.hint = false;
    this.back = false;
    this.modifyFeedback(0);
  }

  getWords(i: number) {
    if (i >= this.unit.words.length) {
      this.returnMainPage();
    } else {
      this.checkFeedBack();

      this.frontWord = this.unit.words[i].front;
      this.backWord = this.unit.words[i].back;
      this.hintSentence = this.unit.words[i].hint;
    }
  }

  modifyFeedback(feedback: number){
    this.unit.words[this.indexWord].feedback = feedback;
    this.indexWord += 1;

    if (this.indexWord >= this.unit.words.length) {
      this.returnMainPage();
    } else {
      this.getWords(this.indexWord);
    }
  }

  returnMainPage() {
    this.unitsService.updateFeedback(this.unit).subscribe((res) => {
      this.ngZone.run(() =>
        this.router.navigateByUrl(`/mainPage/${this.authService.username}`)
      )
    })
  }

  checkFeedBack() {
    if (this.unit.words[this.indexWord].feedback > 0) {
      this.unit.words[this.indexWord].feedback--;
      this.indexWord += 1;
      this.getWords(this.indexWord);
    }
  }

}

import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UnitsService } from "src/app/services/units.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatTableDataSource } from '@angular/material/table';
import { WordI } from 'src/app/models/word';

@Component({
  selector: 'app-unit-creation',
  templateUrl: './unit-creation.component.html',
  styleUrls: ['./unit-creation.component.css']
})
export class UnitCreationComponent implements OnInit {

  userLang;
  username;
  words: WordI[] = [];
  displayedColumns: string[] = ['front', 'back', 'hint', 'action'];
  dataSource!: MatTableDataSource<WordI>;
  unitForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private authService: AuthService,
    private unitsService: UnitsService) { }


  ngOnInit(): void {
    this.submitUnitForm();
  }

  submitUnitForm() {
    if (this.authService.isLoggedIn === false) {
      this.router.navigateByUrl('/login');
    }
    this.userLang = this.authService.getLang();
    this.unitForm = this.fb.group({
      unitname: ['', [Validators.required]],
      username: [this.authService.username, [Validators.required]],
      language: ['', [Validators.required]],
      front: ['', [Validators.required]],
      back: ['', [Validators.required]],
      hint: ['', []],
      feedback: [0, [Validators.required]],
      words: ['', []]
    })

    this.dataSource = new MatTableDataSource<WordI>(this.words);
  }

  addUnit(): void {
    if (this.unitForm.valid) {
      this.unitsService.newUnit(this.unitForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl(`/mainPage/${this.username}`))
      });
    }
  }

  addWord(p_front: string, p_back: string, p_hint: string) {
    let word = { front: p_front, back: p_back, hint: p_hint, feedback: 0 };
    this.words.push(word);
    this.unitForm.value.words = this.words;
    this.dataSource = new MatTableDataSource<WordI>(this.words);
  }

  deleteWord(i: number, e: any) {
    if (window.confirm('Are you sure?')) {
      const data = this.dataSource.data;
      this.dataSource.data = data;
      this.words.splice(i, 1);
      this.dataSource = new MatTableDataSource<WordI>(this.words);
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.unitForm.controls[controlName].hasError(errorName);
  }
}

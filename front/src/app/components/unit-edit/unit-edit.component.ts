import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitsService } from 'src/app/services/units.service';
import { MatTableDataSource } from '@angular/material/table';

import { WordI } from 'src/app/models/word';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-unit-edit',
  templateUrl: './unit-edit.component.html',
  styleUrls: ['./unit-edit.component.css'],
})
export class UnitEditComponent implements OnInit {
  words: WordI[] = [];

  displayedColumns: string[] = ['front', 'back', 'hint', 'action'];
  dataSource!: MatTableDataSource<WordI>;

  unitForm!: FormGroup;
  userLang: any;
  username;
  id;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private unitsService: UnitsService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.submitUnitForm();
    this.loadUnit();
  }

  submitUnitForm() {
    if (this.authService.isLoggedIn === false) {
      this.username = this.authService.username;
      this.router.navigateByUrl('/login');
    }

    this.userLang = this.authService.getLang();

    this.unitForm = this.fb.group({
      unitname: ['', [Validators.required]],
      username: [this.authService.username, [Validators.required]],
      language: ['', [Validators.required]],
      front: ['', []],
      back: ['', []],
      hint: ['', []],
      feedback: [0, [Validators.required]],
      words: ['', []],
    });

    this.dataSource = new MatTableDataSource<WordI>(this.words);
  }

  loadUnit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.unitsService.getUnit(this.id!).subscribe((data) => {
      this.unitForm = this.fb.group({
        unitname: [data.unitname, [Validators.required]],
        username: [this.authService.username, [Validators.required]],
        language: [data.language, [Validators.required]],
        front: ['', []],
        back: ['', []],
        hint: ['', []],
        feedback: [0, [Validators.required]],
        words: [data.words, []],
      });

      this.words = this.unitForm.value.words;

      this.dataSource = new MatTableDataSource<WordI>(this.words);
    });
  }

  updateUnit() {
    if (this.unitForm.valid) {
      this.unitsService.editUnit(this.unitForm.value, this.id).subscribe((res) => {
        this.ngZone.run(() =>
          this.router.navigateByUrl(`/mainPage/${this.username}`)
        );
      });
    }
  }

  addWord(p_front: string, p_back: string, p_hint: string) {
    if (p_front.length > 0 && p_back.length > 0) {
      let word = { front: p_front, back: p_back, hint: p_hint, feedback: 0 };
      this.words.push(word);
      this.unitForm.value.words = this.words;
      this.dataSource = new MatTableDataSource<WordI>(this.words);
    }
    else {
      window.confirm('You must introduce a front and a back');
    }
  }

  deleteWord(index: number, e: any) {
    if (window.confirm('Are you sure?')) {
      const data = this.dataSource.data;
      this.dataSource.data = data;
      this.words.splice(index, 1);

      this.dataSource = new MatTableDataSource<WordI>(this.words);
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.unitForm.controls[controlName].hasError(errorName);
  };
}

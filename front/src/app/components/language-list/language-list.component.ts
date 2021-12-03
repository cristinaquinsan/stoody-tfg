import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnitI } from 'src/app/models/unit';
import { AuthService } from 'src/app/services/auth.service';
import { UnitsService } from 'src/app/services/units.service';


const langList: string[] = ['Mandarin Chinese', 'Spanish', 'English', 'German', 'Portugesse', 'Arabic', 'Russian', 'Japanese', 'Korean'];
@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private unitService: UnitsService) { }

  langlist;
  units: UnitI;
  indexLanguage: number = 0;

  ngOnInit(): void {
    if (this.authService.isLoggedIn === false) {
      this.router.navigateByUrl('/login');
    }
    this.getLanguages();
    this.getUnitsByLanguage(0);
  }
  
  getLanguages() {
    this.langlist = this.authService.userslanguages;
  }

  getUnitsByLanguage(n: number) {
    this.unitService
      .getUnitsByLanguage(this.authService.username, this.langlist[n])
      .subscribe((data) => {
        this.units = data;
        this.indexLanguage = n;
      });
  }

  editUnit(id: number) {
    this.router.navigateByUrl(`/updateUnit/${id}`);
  }

  deleteUnit(id: number) {
    this.unitService.deleteUnit(id).subscribe((data) => {
      console.log('Se ha eliminado la unidad');

      this.getUnitsByLanguage(this.indexLanguage);
    });
  }


}

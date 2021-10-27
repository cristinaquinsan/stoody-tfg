import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export interface dummyUnitI {
  unitName: string,
  words:number,
  language:string
}
const dummyUnitsC: dummyUnitI[] = [{
  unitName: "Phrasal Verbs",
  words: 24,
  language: "English"
},
{
  unitName: "받침",
  words: 12,
  language: "Korean"
},
{
  unitName: "カタカナ",
  words: 12,
  language: "Japanese"
}]

@Component({
  selector: 'app-logged-user-frontpage',
  templateUrl: './logged-user-frontpage.component.html',
  styleUrls: ['./logged-user-frontpage.component.css']
})
export class LoggedUserFrontpageComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) { }
  dummyUnits = dummyUnitsC;
  ngOnInit(): void {
    if (this.authService.isLoggedIn === false) {
      this.router.navigateByUrl('/login');
    }
  }

}

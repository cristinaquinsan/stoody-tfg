import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-study-zone',
  templateUrl: './study-zone.component.html',
  styleUrls: ['./study-zone.component.css']
})
export class StudyZoneComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }  
  hint= false; back= false;
  ngOnInit(): void {
    if(this.authService.isLoggedIn===false){
      this.router.navigateByUrl('/login');
    }
  }

  showHint():void{
    this.hint = true;
  }

  showBack():void{
    this.back = true;
  }

}

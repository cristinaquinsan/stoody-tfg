import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn===false){
      this.router.navigateByUrl('/login');
    }
  }

}

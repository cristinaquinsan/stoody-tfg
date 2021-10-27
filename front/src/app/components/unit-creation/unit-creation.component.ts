import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-unit-creation',
  templateUrl: './unit-creation.component.html',
  styleUrls: ['./unit-creation.component.css']
})
export class UnitCreationComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn===false){
      this.router.navigateByUrl('/login');
    }
  }

}

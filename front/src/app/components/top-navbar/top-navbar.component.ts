import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {
  isLoggedin;
  constructor(private router: Router, private authService: AuthService) {
    this.isLoggedin = false;
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
        this.isLoggedin = this.authService.isLoggedIn;
    })
  }

  logout():void{
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}

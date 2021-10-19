import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {
  logged = false;

  constructor(private router: Router, private authService: AuthService) {
    console.log("1.", this.logged);
  }

  ngOnInit(): void {
    console.log("2.", this.logged);
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.logged = this.authService.isLoggedIn;
        console.log(this.logged)
      }
    })
    console.log("3.", this.logged);
  }

}

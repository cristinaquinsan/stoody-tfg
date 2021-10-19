import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logged-user-frontpage',
  templateUrl: './logged-user-frontpage.component.html',
  styleUrls: ['./logged-user-frontpage.component.css']
})
export class LoggedUserFrontpageComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn===false){
      this.router.navigateByUrl('/login');
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-unlogged-user-frontpage',
  templateUrl: './unlogged-user-frontpage.component.html',
  styleUrls: ['./unlogged-user-frontpage.component.css']
})
export class UnloggedUserFrontpageComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  username;
  ngOnInit(): void {
    if(this.authService.isLoggedIn===true){
      this.username = this.authService.username;
      this.router.navigateByUrl(`/mainPage/${this.username}`);
    }
  }

}

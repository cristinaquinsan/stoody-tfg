import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn===false){
      this.router.navigateByUrl('/login');
    }
  }

}

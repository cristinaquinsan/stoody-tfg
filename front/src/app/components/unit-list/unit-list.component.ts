import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {

  units;

  constructor(private router: Router, private authService: AuthService, private unitService: UnitsService) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn===false){
      this.router.navigateByUrl('/login');
    }
    this.getUnits();
  }

  getUnits() {
    this.unitService.getUnits(this.authService.username).subscribe(data => {
      this.units = data;
    })

  }

}

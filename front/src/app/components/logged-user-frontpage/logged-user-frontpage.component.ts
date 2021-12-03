import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnitI } from 'src/app/models/unit';
import { AuthService } from 'src/app/services/auth.service';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'app-logged-user-frontpage',
  templateUrl: './logged-user-frontpage.component.html',
  styleUrls: ['./logged-user-frontpage.component.css']
})
export class LoggedUserFrontpageComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService, private unitService: UnitsService) { }

  username;
  units = [];
  threeLastUnits: UnitI[] = [];

  ngOnInit(): void {
    if (this.authService.isLoggedIn === false) {
      this.router.navigateByUrl('/login');
    }
    this.username = this.authService.username;
    this.getUnits();
    this.getLastThree();
    this.username = this.authService.username;
  }

  getUnits() {
    this.unitService.getUnits(this.authService.username).subscribe(data => {
      this.units = data;
      this.getLastThree()
    })

  }

  getLastThree() {
    this.threeLastUnits = [];
    if (this.units.length >= 1) this.threeLastUnits.push(this.units[this.units.length - 1])
    if (this.units.length >= 2) this.threeLastUnits.push(this.units[this.units.length - 2])
    if (this.units.length >= 3) this.threeLastUnits.push(this.units[this.units.length - 3])
  }

  deleteUnit(id) {
    this.unitService.deleteUnit(id).subscribe(data => {
      console.log("Se ha eliminado la unidad");
      this.getUnits();
    })
  }

  editUnit(id: any) {
    this.router.navigateByUrl(`/updateUnit/${id}`);
  }

}

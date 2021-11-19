import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'app-unit-view',
  templateUrl: './unit-view.component.html',
  styleUrls: ['./unit-view.component.css']
})
export class UnitViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService, private unitService: UnitsService) { }
  
  unitId;
  unit;
  dataSource;
  displayedColumns: string[] = ['front', 'back'];
  
  ngOnInit(): void {
    if (this.authService.isLoggedIn === false) {
      this.router.navigateByUrl('/login');
    }
    this.route.params.subscribe( (params: Params) => {
      this.unitId = params._id;
      console.log("I've done it, ", this.unitId)
    })

    this.viewUnit(this.unitId);
    this.dataSource = this.unit.words;
  }

  viewUnit(id){
    this.unitService.getUnit(id).subscribe(data => {
      this.unit = data;
      //console.log(this.unit)

    })
  }

}

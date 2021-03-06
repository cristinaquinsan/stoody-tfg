import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UnitsService } from 'src/app/services/units.service';
import { MatTableDataSource } from '@angular/material/table';
import { WordI } from 'src/app/models/word';

@Component({
  selector: 'app-unit-view',
  templateUrl: './unit-view.component.html',
  styleUrls: ['./unit-view.component.css']
})
export class UnitViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService, private unitService: UnitsService) { }
  
  unitId!: any;
  unit: any = [];
  words: WordI[] = [];
  displayedColumns: string[] = ['front', 'back', 'hint'];
  dataSource!: MatTableDataSource<WordI>;
  id;
  
  ngOnInit(): void {
    if (this.authService.isLoggedIn === false) {
      this.router.navigateByUrl('/login');
    }
    this.unitId = this.route.snapshot.paramMap.get('id');
    console.log(this.unitId)
    this.viewUnit(this.unitId);
  }

  viewUnit(id){
    this.unitService.getUnit(id!).subscribe(data => {
      this.unit = data;
      this.words = this.unit.words;
      this.dataSource = new MatTableDataSource<WordI>(this.words);
    })
  }

  editUnit() {
    console.log(this.unitId);
    this.router.navigateByUrl(`/updateUnit/${this.unitId}`);
  }

  deleteUnit() {
    this.unitService.deleteUnit(this.unitId).subscribe((data) => {
      console.log('Se ha eliminado la unidad', this.unitId);
    });
    this.router.navigateByUrl(`/myUnits`);
  }

}

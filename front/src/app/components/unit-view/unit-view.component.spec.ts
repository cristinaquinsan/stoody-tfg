import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitViewComponent } from './unit-view.component';

describe('UnitViewComponent', () => {
  let component: UnitViewComponent;
  let fixture: ComponentFixture<UnitViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

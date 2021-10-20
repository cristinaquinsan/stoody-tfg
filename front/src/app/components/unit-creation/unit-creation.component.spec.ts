import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitCreationComponent } from './unit-creation.component';

describe('UnitCreationComponent', () => {
  let component: UnitCreationComponent;
  let fixture: ComponentFixture<UnitCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

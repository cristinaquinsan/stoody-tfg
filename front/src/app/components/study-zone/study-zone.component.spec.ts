import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyZoneComponent } from './study-zone.component';

describe('StudyZoneComponent', () => {
  let component: StudyZoneComponent;
  let fixture: ComponentFixture<StudyZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

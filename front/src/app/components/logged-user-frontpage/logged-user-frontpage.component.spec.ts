import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedUserFrontpageComponent } from './logged-user-frontpage.component';

describe('LoggedUserFrontpageComponent', () => {
  let component: LoggedUserFrontpageComponent;
  let fixture: ComponentFixture<LoggedUserFrontpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedUserFrontpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedUserFrontpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

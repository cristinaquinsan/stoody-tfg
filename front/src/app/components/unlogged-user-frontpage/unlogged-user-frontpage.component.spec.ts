import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnloggedUserFrontpageComponent } from './unlogged-user-frontpage.component';

describe('UnloggedUserFrontpageComponent', () => {
  let component: UnloggedUserFrontpageComponent;
  let fixture: ComponentFixture<UnloggedUserFrontpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnloggedUserFrontpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnloggedUserFrontpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

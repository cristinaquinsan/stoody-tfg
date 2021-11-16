import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingWordComponent } from './adding-word.component';

describe('AddingWordComponent', () => {
  let component: AddingWordComponent;
  let fixture: ComponentFixture<AddingWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

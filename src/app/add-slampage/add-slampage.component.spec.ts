import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSlampageComponent } from './add-slampage.component';

describe('AddSlampageComponent', () => {
  let component: AddSlampageComponent;
  let fixture: ComponentFixture<AddSlampageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSlampageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSlampageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

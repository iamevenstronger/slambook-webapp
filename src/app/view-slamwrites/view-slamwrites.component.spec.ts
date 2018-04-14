import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSlamwritesComponent } from './view-slamwrites.component';

describe('ViewSlamwritesComponent', () => {
  let component: ViewSlamwritesComponent;
  let fixture: ComponentFixture<ViewSlamwritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSlamwritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSlamwritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

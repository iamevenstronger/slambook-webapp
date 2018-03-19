import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlamPagesComponent } from './slam-pages.component';

describe('SlamPagesComponent', () => {
  let component: SlamPagesComponent;
  let fixture: ComponentFixture<SlamPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlamPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlamPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

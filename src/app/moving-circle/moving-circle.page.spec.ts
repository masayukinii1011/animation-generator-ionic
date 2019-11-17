import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingCirclePage } from './moving-circle.page';

describe('MovingCirclePage', () => {
  let component: MovingCirclePage;
  let fixture: ComponentFixture<MovingCirclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovingCirclePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingCirclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

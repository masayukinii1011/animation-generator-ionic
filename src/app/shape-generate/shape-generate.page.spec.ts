import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeGeneratePage } from './shape-generate.page';

describe('ShapeGeneratePage', () => {
  let component: ShapeGeneratePage;
  let fixture: ComponentFixture<ShapeGeneratePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapeGeneratePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeGeneratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

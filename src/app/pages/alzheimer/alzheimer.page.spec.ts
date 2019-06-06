import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlzheimerPage } from './alzheimer.page';

describe('AlzheimerPage', () => {
  let component: AlzheimerPage;
  let fixture: ComponentFixture<AlzheimerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlzheimerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlzheimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

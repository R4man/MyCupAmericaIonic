import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAvisoPage } from './modal-aviso.page';

describe('ModalAvisoPage', () => {
  let component: ModalAvisoPage;
  let fixture: ComponentFixture<ModalAvisoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAvisoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAvisoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

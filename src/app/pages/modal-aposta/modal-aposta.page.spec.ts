import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApostaPage } from './modal-aposta.page';

describe('ModalApostaPage', () => {
  let component: ModalApostaPage;
  let fixture: ComponentFixture<ModalApostaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApostaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApostaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

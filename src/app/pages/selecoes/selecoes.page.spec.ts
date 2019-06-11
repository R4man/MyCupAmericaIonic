import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecoesPage } from './selecoes.page';

describe('SobrePage', () => {
  let component: SelecoesPage;
  let fixture: ComponentFixture<SelecoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataJogosPage } from './data-jogos.page';

describe('DataJogosPage', () => {
  let component: DataJogosPage;
  let fixture: ComponentFixture<DataJogosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataJogosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataJogosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

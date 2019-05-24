import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalMatriculaPage } from './modal-matricula.page';

describe('ModalTestePage', () => {
  let component: ModalMatriculaPage;
  let fixture: ComponentFixture<ModalMatriculaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalMatriculaPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMatriculaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalClientePage } from './modal-cliente.page';

describe('ModalClientePage', () => {
  let component: ModalClientePage;
  let fixture: ComponentFixture<ModalClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

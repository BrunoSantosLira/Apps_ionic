import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecnologiaPage } from './tecnologia.page';

describe('TecnologiaPage', () => {
  let component: TecnologiaPage;
  let fixture: ComponentFixture<TecnologiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TecnologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

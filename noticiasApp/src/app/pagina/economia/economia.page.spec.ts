import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EconomiaPage } from './economia.page';

describe('EconomiaPage', () => {
  let component: EconomiaPage;
  let fixture: ComponentFixture<EconomiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EconomiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

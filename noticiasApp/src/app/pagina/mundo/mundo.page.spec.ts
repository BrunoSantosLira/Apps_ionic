import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MundoPage } from './mundo.page';

describe('MundoPage', () => {
  let component: MundoPage;
  let fixture: ComponentFixture<MundoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MundoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

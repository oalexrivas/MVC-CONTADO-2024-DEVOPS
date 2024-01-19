import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroproveedoresComponent } from './registroproveedores.component';

describe('RegistroproveedoresComponent', () => {
  let component: RegistroproveedoresComponent;
  let fixture: ComponentFixture<RegistroproveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroproveedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobanteliquidacionComponent } from './comprobanteliquidacion.component';

describe('ComprobanteliquidacionComponent', () => {
  let component: ComprobanteliquidacionComponent;
  let fixture: ComponentFixture<ComprobanteliquidacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprobanteliquidacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprobanteliquidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

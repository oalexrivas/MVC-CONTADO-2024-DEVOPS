import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantedonacionComponent } from './comprobantedonacion.component';

describe('ComprobantedonacionComponent', () => {
  let component: ComprobantedonacionComponent;
  let fixture: ComponentFixture<ComprobantedonacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprobantedonacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprobantedonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

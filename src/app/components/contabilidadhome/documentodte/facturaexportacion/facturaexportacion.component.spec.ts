import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaexportacionComponent } from './facturaexportacion.component';

describe('FacturaexportacionComponent', () => {
  let component: FacturaexportacionComponent;
  let fixture: ComponentFixture<FacturaexportacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaexportacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaexportacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

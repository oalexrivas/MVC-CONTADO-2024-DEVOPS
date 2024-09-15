import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaFacturaExportacionComponent } from './plantilla-factura-exportacion.component';

describe('PlantillaFacturaExportacionComponent', () => {
  let component: PlantillaFacturaExportacionComponent;
  let fixture: ComponentFixture<PlantillaFacturaExportacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantillaFacturaExportacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantillaFacturaExportacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

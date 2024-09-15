import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PlantillaCreditoFiscalComponent } from './plantilla-credito-fiscal.component';

describe('PlantillaCreditoFiscalComponent', () => {
  let component: PlantillaCreditoFiscalComponent;
  let fixture: ComponentFixture<PlantillaCreditoFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantillaCreditoFiscalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantillaCreditoFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

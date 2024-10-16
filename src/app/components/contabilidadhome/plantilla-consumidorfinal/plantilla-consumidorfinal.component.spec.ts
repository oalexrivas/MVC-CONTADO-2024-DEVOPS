import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PlantillaConsumidorfinalComponent } from './plantilla-consumidorfinal.component';

describe('PlantillaConsumidorfinalComponent', () => {
  let component: PlantillaConsumidorfinalComponent;
  let fixture: ComponentFixture<PlantillaConsumidorfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantillaConsumidorfinalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantillaConsumidorfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

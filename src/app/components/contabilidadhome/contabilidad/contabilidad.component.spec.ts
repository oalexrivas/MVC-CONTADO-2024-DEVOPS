import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { ContabilidadComponent } from './contabilidad.component';

describe('ContabilidadComponent', () => {
  let component: ContabilidadComponent;
  let fixture: ComponentFixture<ContabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

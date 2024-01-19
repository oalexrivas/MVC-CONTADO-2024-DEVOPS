import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContabilidadregistroclientesComponent } from './contabilidadregistroclientes.component';

describe('ContabilidadregistroclientesComponent', () => {
  let component: ContabilidadregistroclientesComponent;
  let fixture: ComponentFixture<ContabilidadregistroclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContabilidadregistroclientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContabilidadregistroclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

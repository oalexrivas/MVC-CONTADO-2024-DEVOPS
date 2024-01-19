import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContabilidadinicioComponent } from './contabilidadinicio.component';

describe('ContabilidadinicioComponent', () => {
  let component: ContabilidadinicioComponent;
  let fixture: ComponentFixture<ContabilidadinicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContabilidadinicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContabilidadinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

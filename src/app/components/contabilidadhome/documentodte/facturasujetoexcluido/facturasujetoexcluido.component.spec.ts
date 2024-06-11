import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasujetoexcluidoComponent } from './facturasujetoexcluido.component';

describe('FacturasujetoexcluidoComponent', () => {
  let component: FacturasujetoexcluidoComponent;
  let fixture: ComponentFixture<FacturasujetoexcluidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturasujetoexcluidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturasujetoexcluidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

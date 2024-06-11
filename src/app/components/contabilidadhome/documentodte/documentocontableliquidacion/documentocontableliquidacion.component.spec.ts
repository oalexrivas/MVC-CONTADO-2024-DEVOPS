import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentocontableliquidacionComponent } from './documentocontableliquidacion.component';

describe('DocumentocontableliquidacionComponent', () => {
  let component: DocumentocontableliquidacionComponent;
  let fixture: ComponentFixture<DocumentocontableliquidacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentocontableliquidacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentocontableliquidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

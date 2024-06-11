import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobanteretencionComponent } from './comprobanteretencion.component';

describe('ComprobanteretencionComponent', () => {
  let component: ComprobanteretencionComponent;
  let fixture: ComponentFixture<ComprobanteretencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprobanteretencionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprobanteretencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

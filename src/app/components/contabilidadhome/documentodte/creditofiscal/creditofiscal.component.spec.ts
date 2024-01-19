import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditofiscalComponent } from './creditofiscal.component';

describe('CreditofiscalComponent', () => {
  let component: CreditofiscalComponent;
  let fixture: ComponentFixture<CreditofiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditofiscalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditofiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

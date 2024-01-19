import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucioncompletaComponent } from './distribucioncompleta.component';

describe('DistribucioncompletaComponent', () => {
  let component: DistribucioncompletaComponent;
  let fixture: ComponentFixture<DistribucioncompletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistribucioncompletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistribucioncompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

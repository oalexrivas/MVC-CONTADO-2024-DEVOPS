import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumidorfinalComponent } from './consumidorfinal.component';

describe('ConsumidorfinalComponent', () => {
  let component: ConsumidorfinalComponent;
  let fixture: ComponentFixture<ConsumidorfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumidorfinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumidorfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

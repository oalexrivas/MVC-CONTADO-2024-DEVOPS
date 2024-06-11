import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotadebitoComponent } from './notadebito.component';

describe('NotadebitoComponent', () => {
  let component: NotadebitoComponent;
  let fixture: ComponentFixture<NotadebitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotadebitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotadebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaremisionComponent } from './notaremision.component';

describe('NotaremisionComponent', () => {
  let component: NotaremisionComponent;
  let fixture: ComponentFixture<NotaremisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaremisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaremisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

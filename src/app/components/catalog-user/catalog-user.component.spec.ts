import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUserComponent } from './catalog-user.component';

describe('CatalogUserComponent', () => {
  let component: CatalogUserComponent;
  let fixture: ComponentFixture<CatalogUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

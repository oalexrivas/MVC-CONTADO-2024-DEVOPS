import { TestBed } from '@angular/core/testing';

import { MenuOpcionService } from './menu-opcion.service';

describe('MenuOpcionService', () => {
  let service: MenuOpcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuOpcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

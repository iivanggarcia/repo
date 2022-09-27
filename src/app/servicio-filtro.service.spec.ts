import { TestBed } from '@angular/core/testing';

import { ServicioFiltroService } from './servicio-filtro.service';

describe('ServicioFiltroService', () => {
  let service: ServicioFiltroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioFiltroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

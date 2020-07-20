import { TestBed } from '@angular/core/testing';

import { ComprasService } from './compras.service';

describe('ComprasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComprasService = TestBed.get(ComprasService);
    expect(service).toBeTruthy();
  });
});

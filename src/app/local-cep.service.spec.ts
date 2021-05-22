import { TestBed } from '@angular/core/testing';

import { LocalCepService } from './local-cep.service';

describe('LocalCepService', () => {
  let service: LocalCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { WSSerGeneralService } from './wsser-general.service';

describe('WSSerGeneralService', () => {
  let service: WSSerGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WSSerGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { IconRenderingServiceService } from './icon-rendering-service.service';

describe('IconRenderingServiceService', () => {
  let service: IconRenderingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconRenderingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

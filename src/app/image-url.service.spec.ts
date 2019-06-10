import { TestBed } from '@angular/core/testing';

import { ImageURLService } from './image-url.service';

describe('ImageURLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageURLService = TestBed.get(ImageURLService);
    expect(service).toBeTruthy();
  });
});

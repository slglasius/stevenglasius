import { TestBed } from '@angular/core/testing';

import { ListOffImagesService } from './list-off-images.service';

describe('ListOffImagesService', () => {
  let service: ListOffImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOffImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DownloadUploadService } from './download-upload.service';

describe('DownloadUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DownloadUploadService = TestBed.get(DownloadUploadService);
    expect(service).toBeTruthy();
  });
});

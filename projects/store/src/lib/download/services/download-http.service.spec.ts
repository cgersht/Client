import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DownloadHttpService } from './download-http.service';

describe('DownloadHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
    providers: [DownloadHttpService]
  }));

  it('should be created', () => {
    const service: DownloadHttpService = TestBed.get(DownloadHttpService);
    expect(service).toBeTruthy();
  });
});

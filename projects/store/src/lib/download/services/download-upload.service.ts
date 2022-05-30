import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DownloadUploadService {


  downloadFromArrayBuffer(blob: Blob, headers: HttpHeaders) {
    const contentDisposition = headers.get('Content-Disposition');
  

    const fileName = '1.pdf';
    const objectURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = objectURL;
    link.download = fileName;
    link.style.display = 'none';
    document.querySelector('body').appendChild(link);
    link.click();
    link.remove();

    return true;
  }
}

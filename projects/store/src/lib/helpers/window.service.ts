import { Injectable } from '@angular/core';
import { IDictObject } from 'types';

@Injectable({ providedIn: 'root' })
export class WindowService {

  openNewTab(url: string, params?: IDictObject<string | number | boolean>) {
    const paramsString = Object.entries(params || {}).reduce((state, [key, value]) => `${state}&${key}=${value}`, '').slice(1);
    if (!/http/.test(url)) {
      url = `http://${url}`;
    }
    url = `${url}?${paramsString}`;
    url = /\?$/.test(url) ? url.slice(0, -1) : url;
    window.open(encodeURI(url));
  }
}

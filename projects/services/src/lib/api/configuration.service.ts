import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';
import { Setting, IpConfig } from 'types';

@Injectable({ providedIn: 'root' })
export class ConfigurationService {
  ips: IpConfig;
  settingConfig: Setting;

  constructor(
    private http: HttpClient) {
  }
 
  initConfiguration(path): Promise<any> {
    return combineLatest(
      this.http.get<IpConfig>(`${path}/ipConfig.json`),
      this.http.get<Setting>(`${path}/settingsConfig.json`)
    ).pipe(
      tap(response => [this.ips, this.settingConfig] = response),
    ).toPromise();
  }
}

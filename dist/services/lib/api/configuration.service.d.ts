import { HttpClient } from '@angular/common/http';
import { Setting, IpConfig } from 'types';
export declare class ConfigurationService {
    private http;
    ips: IpConfig;
    settingConfig: Setting;
    constructor(http: HttpClient);
    initConfiguration(path: any): Promise<any>;
}

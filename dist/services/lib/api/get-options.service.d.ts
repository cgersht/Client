import { HttpClient } from '@angular/common/http';
export declare class GetOptionsService {
    private http;
    options: any[];
    constructor(http: HttpClient);
    initService(path: string, imagesPath: string): Promise<any>;
    getOptions(): any[];
    getOptionByImage(img: any): any;
}

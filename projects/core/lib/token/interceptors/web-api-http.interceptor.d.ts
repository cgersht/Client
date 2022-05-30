import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
export declare class WebApiHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>>;
}

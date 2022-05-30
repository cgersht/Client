/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/http-service.base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
/**
 * @abstract
 */
export class HttpServiceBase {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
        this.index = 0;
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    get$(httpRequest) {
        if (httpRequest.isText) {
            return this._get$(httpRequest);
        }
        return this.http.get(httpRequest.fullUrl, { params: Object.assign({}, httpRequest.fullParams) });
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    delete$(httpRequest) {
        return this.http.delete(httpRequest.fullUrl, { params: Object.assign({}, httpRequest.fullParams) });
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    post$(httpRequest) {
        if (httpRequest.isText) {
            return this._post$(httpRequest);
        }
        return this.http.post(httpRequest.fullUrl, httpRequest.body, { headers: httpRequest.headers, params: Object.assign({}, httpRequest.fullParams) });
    }
    /**
     * @param {?} httpRequest
     * @return {?}
     */
    request$(httpRequest) {
        return this.http.request('GET', httpRequest.fullUrl, {
            params: Object.assign({}, httpRequest.fullParams),
            observe: 'response',
            responseType: 'blob',
        });
    }
    /**
     * @param {?} httpRequest
     * @return {?}
     */
    requestPost$(httpRequest) {
        return this.http.request('POST', httpRequest.fullUrl, {
            body: Object.assign({}, httpRequest.body),
            params: Object.assign({}, httpRequest.fullParams),
            observe: 'response',
            responseType: 'blob',
        });
    }
    /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    _get$(httpRequest) {
        return this.http.get(httpRequest.fullUrl, { params: Object.assign({}, httpRequest.fullParams), responseType: 'text' });
    }
    /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    _post$(httpRequest) {
        return this.http.post(httpRequest.fullUrl, httpRequest.body, { params: Object.assign({}, httpRequest.fullParams), responseType: 'text' });
    }
}
HttpServiceBase.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpServiceBase.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigurationService }
];
if (false) {
    /** @type {?} */
    HttpServiceBase.prototype.index;
    /**
     * @type {?}
     * @protected
     */
    HttpServiceBase.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    HttpServiceBase.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1zZXJ2aWNlLmJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXJ2aWNlcy8iLCJzb3VyY2VzIjpbImxpYi9hcGkvaHR0cC1zZXJ2aWNlLmJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFtRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ILE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFHckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFHL0QsTUFBTSxPQUFnQixlQUFlOzs7OztJQUluQyxZQUNZLElBQWdCLEVBQ2hCLE1BQTRCO1FBRDVCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFIeEMsVUFBSyxHQUFHLENBQUMsQ0FBQztJQUlOLENBQUM7Ozs7OztJQUVMLElBQUksQ0FBYSxXQUE2QjtRQUU1QyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7U0FBRTtRQUUzRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLG9CQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFhLFdBQTZCO1FBRS9DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUksV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sb0JBQU8sV0FBVyxDQUFDLFVBQVUsQ0FBRSxFQUFFLENBQUMsQ0FBQztJQUM3RixDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQWEsV0FBNkI7UUFFN0MsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQUU7UUFDNUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxXQUFXLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQzVELEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxvQkFBTyxXQUFXLENBQUMsVUFBVSxDQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFdBQTZCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQ3RCLEtBQUssRUFDTCxXQUFXLENBQUMsT0FBTyxFQUNuQjtZQUNFLE1BQU0sb0JBQU8sV0FBVyxDQUFDLFVBQVUsQ0FBRTtZQUNyQyxPQUFPLEVBQUUsVUFBVTtZQUNuQixZQUFZLEVBQUUsTUFBTTtTQUVyQixDQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxXQUE2QjtRQUN4QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUN0QixNQUFNLEVBQ04sV0FBVyxDQUFDLE9BQU8sRUFDbkI7WUFFRSxJQUFJLG9CQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUU7WUFDN0IsTUFBTSxvQkFBTyxXQUFXLENBQUMsVUFBVSxDQUFFO1lBQ3JDLE9BQU8sRUFBRSxVQUFVO1lBQ25CLFlBQVksRUFBRSxNQUFNO1NBRXJCLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7OztJQUVPLEtBQUssQ0FBQyxXQUE2QjtRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLG9CQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM3RyxDQUFDOzs7Ozs7SUFFTyxNQUFNLENBQUMsV0FBNkI7UUFDMUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLG9CQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNoSSxDQUFDOzs7WUE3REYsVUFBVTs7OztZQU5GLFVBQVU7WUFJVixvQkFBb0I7Ozs7SUFNM0IsZ0NBQVU7Ozs7O0lBRVIsK0JBQTBCOzs7OztJQUMxQixpQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RNb2RlbCB9IGZyb20gJ3R5cGVzJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIdHRwU2VydmljZUJhc2Uge1xyXG5cclxuXHJcbiAgaW5kZXggPSAwO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBDb25maWd1cmF0aW9uU2VydmljZSxcclxuICApIHsgfVxyXG5cclxuICBnZXQkPFQgPSBzdHJpbmc+KGh0dHBSZXF1ZXN0OiBIdHRwUmVxdWVzdE1vZGVsKTogT2JzZXJ2YWJsZTxUPiB7XHJcblxyXG4gICAgaWYgKGh0dHBSZXF1ZXN0LmlzVGV4dCkgeyByZXR1cm4gdGhpcy5fZ2V0JChodHRwUmVxdWVzdCk7IH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUPihodHRwUmVxdWVzdC5mdWxsVXJsLCB7IHBhcmFtczogeyAuLi5odHRwUmVxdWVzdC5mdWxsUGFyYW1zIH0gfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUkPFQgPSBzdHJpbmc+KGh0dHBSZXF1ZXN0OiBIdHRwUmVxdWVzdE1vZGVsKTogT2JzZXJ2YWJsZTxUPiB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8VD4oaHR0cFJlcXVlc3QuZnVsbFVybCwgeyBwYXJhbXM6IHsgLi4uaHR0cFJlcXVlc3QuZnVsbFBhcmFtcyB9IH0pO1xyXG4gIH1cclxuXHJcbiAgcG9zdCQ8VCA9IHN0cmluZz4oaHR0cFJlcXVlc3Q6IEh0dHBSZXF1ZXN0TW9kZWwpOiBPYnNlcnZhYmxlPFQ+IHtcclxuXHJcbiAgICBpZiAoaHR0cFJlcXVlc3QuaXNUZXh0KSB7IHJldHVybiB0aGlzLl9wb3N0JChodHRwUmVxdWVzdCk7IH1cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxUPihodHRwUmVxdWVzdC5mdWxsVXJsLCBodHRwUmVxdWVzdC5ib2R5LFxyXG4gICAgICB7IGhlYWRlcnM6IGh0dHBSZXF1ZXN0LmhlYWRlcnMsIHBhcmFtczogeyAuLi5odHRwUmVxdWVzdC5mdWxsUGFyYW1zIH0gfSk7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0JChodHRwUmVxdWVzdDogSHR0cFJlcXVlc3RNb2RlbCk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChcclxuICAgICAgJ0dFVCcsXHJcbiAgICAgIGh0dHBSZXF1ZXN0LmZ1bGxVcmwsXHJcbiAgICAgIHtcclxuICAgICAgICBwYXJhbXM6IHsgLi4uaHR0cFJlcXVlc3QuZnVsbFBhcmFtcyB9LFxyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYicsXHJcblxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3RQb3N0JChodHRwUmVxdWVzdDogSHR0cFJlcXVlc3RNb2RlbCk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChcclxuICAgICAgJ1BPU1QnLFxyXG4gICAgICBodHRwUmVxdWVzdC5mdWxsVXJsLFxyXG4gICAgICB7XHJcblxyXG4gICAgICAgIGJvZHk6IHsgLi4uaHR0cFJlcXVlc3QuYm9keSB9LFxyXG4gICAgICAgIHBhcmFtczogeyAuLi5odHRwUmVxdWVzdC5mdWxsUGFyYW1zIH0sXHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJyxcclxuXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0JChodHRwUmVxdWVzdDogSHR0cFJlcXVlc3RNb2RlbCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChodHRwUmVxdWVzdC5mdWxsVXJsLCB7IHBhcmFtczogeyAuLi5odHRwUmVxdWVzdC5mdWxsUGFyYW1zIH0sIHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcG9zdCQoaHR0cFJlcXVlc3Q6IEh0dHBSZXF1ZXN0TW9kZWwpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGh0dHBSZXF1ZXN0LmZ1bGxVcmwsIGh0dHBSZXF1ZXN0LmJvZHksIHsgcGFyYW1zOiB7IC4uLmh0dHBSZXF1ZXN0LmZ1bGxQYXJhbXMgfSwgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
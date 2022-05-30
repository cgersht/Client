/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-customers.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'types';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
export class GetCustomersService extends HttpServiceBase {
    /**
     * @private
     * @return {?}
     */
    get _serverUrl() {
        return `${this.config.ips.servicePath}customers/`;
    }
    /**
     * @return {?}
     */
    getCustomersList$() {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getCustomers',
        }));
        //return this.http.get<Customers>('http://localhost:3030/customers/getCustomers');
    }
}
GetCustomersService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ GetCustomersService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetCustomersService_Factory() { return new GetCustomersService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: GetCustomersService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWN1c3RvbWVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VydmljZXMvIiwic291cmNlcyI6WyJsaWIvYXBpL2dldC1jdXN0b21lcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFZLE1BQU0sT0FBTyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUd0RCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZUFBZTs7Ozs7SUFDdEQsSUFBWSxVQUFVO1FBQ3BCLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLFlBQVksQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ25DLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsY0FBYztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUNOLGtGQUFrRjtJQUNsRixDQUFDOzs7WUFaRixVQUFVLFNBQUMsRUFBRyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3RNb2RlbCwgQ3VzdG9tZXIgfSBmcm9tICd0eXBlcyc7XG5pbXBvcnQgeyBIdHRwU2VydmljZUJhc2UgfSBmcm9tICcuL2h0dHAtc2VydmljZS5iYXNlJztcblxuQEluamVjdGFibGUoeyAgcHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBHZXRDdXN0b21lcnNTZXJ2aWNlIGV4dGVuZHMgSHR0cFNlcnZpY2VCYXNlIHtcbiAgcHJpdmF0ZSBnZXQgX3NlcnZlclVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5pcHMuc2VydmljZVBhdGh9Y3VzdG9tZXJzL2A7XG4gIH1cblxuICBnZXRDdXN0b21lcnNMaXN0JCgpOiBPYnNlcnZhYmxlPEN1c3RvbWVyW10+IHtcbiAgIHJldHVybiB0aGlzLmdldCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICdnZXRDdXN0b21lcnMnLFxuICAgIH0pKTtcbiAgLy9yZXR1cm4gdGhpcy5odHRwLmdldDxDdXN0b21lcnM+KCdodHRwOi8vbG9jYWxob3N0OjMwMzAvY3VzdG9tZXJzL2dldEN1c3RvbWVycycpO1xuICB9XG5cbn1cbiJdfQ==
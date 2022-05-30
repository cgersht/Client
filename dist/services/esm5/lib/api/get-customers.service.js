/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-customers.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'types';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
var GetCustomersService = /** @class */ (function (_super) {
    tslib_1.__extends(GetCustomersService, _super);
    function GetCustomersService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GetCustomersService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.config.ips.servicePath + "customers/";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GetCustomersService.prototype.getCustomersList$ = /**
     * @return {?}
     */
    function () {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getCustomers',
        }));
        //return this.http.get<Customers>('http://localhost:3030/customers/getCustomers');
    };
    GetCustomersService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ GetCustomersService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetCustomersService_Factory() { return new GetCustomersService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: GetCustomersService, providedIn: "root" });
    return GetCustomersService;
}(HttpServiceBase));
export { GetCustomersService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWN1c3RvbWVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VydmljZXMvIiwic291cmNlcyI6WyJsaWIvYXBpL2dldC1jdXN0b21lcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBWSxNQUFNLE9BQU8sQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFdEQ7SUFDeUMsK0NBQWU7SUFEeEQ7O0tBY0M7SUFaQyxzQkFBWSwyQ0FBVTs7Ozs7UUFBdEI7WUFDRSxPQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsZUFBWSxDQUFDO1FBQ3BELENBQUM7OztPQUFBOzs7O0lBRUQsK0NBQWlCOzs7SUFBakI7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNuQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGNBQWM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTixrRkFBa0Y7SUFDbEYsQ0FBQzs7Z0JBWkYsVUFBVSxTQUFDLEVBQUcsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OzhCQUxsQztDQW1CQyxBQWRELENBQ3lDLGVBQWUsR0FhdkQ7U0FiWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdE1vZGVsLCBDdXN0b21lciB9IGZyb20gJ3R5cGVzJztcbmltcG9ydCB7IEh0dHBTZXJ2aWNlQmFzZSB9IGZyb20gJy4vaHR0cC1zZXJ2aWNlLmJhc2UnO1xuXG5ASW5qZWN0YWJsZSh7ICBwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEdldEN1c3RvbWVyc1NlcnZpY2UgZXh0ZW5kcyBIdHRwU2VydmljZUJhc2Uge1xuICBwcml2YXRlIGdldCBfc2VydmVyVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuY29uZmlnLmlwcy5zZXJ2aWNlUGF0aH1jdXN0b21lcnMvYDtcbiAgfVxuXG4gIGdldEN1c3RvbWVyc0xpc3QkKCk6IE9ic2VydmFibGU8Q3VzdG9tZXJbXT4ge1xuICAgcmV0dXJuIHRoaXMuZ2V0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ2dldEN1c3RvbWVycycsXG4gICAgfSkpO1xuICAvL3JldHVybiB0aGlzLmh0dHAuZ2V0PEN1c3RvbWVycz4oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9jdXN0b21lcnMvZ2V0Q3VzdG9tZXJzJyk7XG4gIH1cblxufVxuIl19
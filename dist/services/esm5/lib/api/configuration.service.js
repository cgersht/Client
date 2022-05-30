/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(http) {
        this.http = http;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    ConfigurationService.prototype.initConfiguration = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        var _this = this;
        return combineLatest(this.http.get(path + "/ipConfig.json"), this.http.get(path + "/settingsConfig.json")).pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            var _a;
            return _a = tslib_1.__read(response, 2), _this.ips = _a[0], _this.settingConfig = _a[1], response;
        }))).toPromise();
    };
    ConfigurationService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ConfigurationService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ ConfigurationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(i0.ɵɵinject(i1.HttpClient)); }, token: ConfigurationService, providedIn: "root" });
    return ConfigurationService;
}());
export { ConfigurationService };
if (false) {
    /** @type {?} */
    ConfigurationService.prototype.ips;
    /** @type {?} */
    ConfigurationService.prototype.settingConfig;
    /**
     * @type {?}
     * @private
     */
    ConfigurationService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VydmljZXMvIiwic291cmNlcyI6WyJsaWIvYXBpL2NvbmZpZ3VyYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR2hEO0lBS0UsOEJBQ1UsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUMxQixDQUFDOzs7OztJQUVELGdEQUFpQjs7OztJQUFqQixVQUFrQixJQUFJO1FBQXRCLGlCQU9DO1FBTkMsT0FBTyxhQUFhLENBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFjLElBQUksbUJBQWdCLENBQUMsRUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWEsSUFBSSx5QkFBc0IsQ0FBQyxDQUN0RCxDQUFDLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQSxRQUFROztZQUFJLE9BQUEsZ0NBQXlDLEVBQXhDLGlCQUFRLEVBQUUsMkJBQWtCLEVBQUksUUFBUTtRQUF6QyxDQUF5QyxFQUFDLENBQzNELENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Z0JBaEJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBSnpCLFVBQVU7OzsrQkFGbkI7Q0F1QkMsQUFqQkQsSUFpQkM7U0FoQlksb0JBQW9COzs7SUFDL0IsbUNBQWM7O0lBQ2QsNkNBQXVCOzs7OztJQUdyQixvQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgdGFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFNldHRpbmcsIElwQ29uZmlnIH0gZnJvbSAndHlwZXMnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuICBpcHM6IElwQ29uZmlnO1xyXG4gIHNldHRpbmdDb25maWc6IFNldHRpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgfVxyXG4gXHJcbiAgaW5pdENvbmZpZ3VyYXRpb24ocGF0aCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChcclxuICAgICAgdGhpcy5odHRwLmdldDxJcENvbmZpZz4oYCR7cGF0aH0vaXBDb25maWcuanNvbmApLFxyXG4gICAgICB0aGlzLmh0dHAuZ2V0PFNldHRpbmc+KGAke3BhdGh9L3NldHRpbmdzQ29uZmlnLmpzb25gKVxyXG4gICAgKS5waXBlKFxyXG4gICAgICB0YXAocmVzcG9uc2UgPT4gW3RoaXMuaXBzLCB0aGlzLnNldHRpbmdDb25maWddID0gcmVzcG9uc2UpLFxyXG4gICAgKS50b1Byb21pc2UoKTtcclxuICB9XHJcbn1cclxuIl19
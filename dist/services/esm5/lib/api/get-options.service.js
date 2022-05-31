/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-options.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var GetOptionsService = /** @class */ (function () {
    function GetOptionsService(http) {
        this.http = http;
    }
    //
    //
    /**
     * @param {?} path
     * @param {?} imagesPath
     * @return {?}
     */
    GetOptionsService.prototype.initService = 
    //
    /**
     * @param {?} path
     * @param {?} imagesPath
     * @return {?}
     */
    function (path, imagesPath) {
        var _this = this;
        console.log("============" + path);
        return this.http.get(path).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return (tslib_1.__assign({}, item, { imgSource: imagesPath + "/" + item['img'] + ".png" })); })); })), tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.options = result; })), tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return console.log("**************" + result); }))).toPromise();
    };
    /**
     * @return {?}
     */
    GetOptionsService.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        //  console.log(`-----------------${this.options}`);
        return this.options;
    };
    /**
     * @param {?} img
     * @return {?}
     */
    GetOptionsService.prototype.getOptionByImage = /**
     * @param {?} img
     * @return {?}
     */
    function (img) {
        if (!this.options) {
            return '';
        }
        return (this.options.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.img === img; })) || { imgSource: 'notFound' }).imgSource;
    };
    GetOptionsService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    GetOptionsService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ GetOptionsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetOptionsService_Factory() { return new GetOptionsService(i0.ɵɵinject(i1.HttpClient)); }, token: GetOptionsService, providedIn: "root" });
    return GetOptionsService;
}());
export { GetOptionsService };
if (false) {
    /** @type {?} */
    GetOptionsService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    GetOptionsService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LW9wdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtb3B0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUUxQztJQUdFLDJCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUssQ0FBQztJQUM1QyxFQUFFOzs7Ozs7O0lBQ0EsdUNBQVc7Ozs7Ozs7SUFBWCxVQUFZLElBQVksRUFBQyxVQUFrQjtRQUEzQyxpQkFPQztRQU5DLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWUsSUFBTSxDQUFDLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3JDLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxzQkFBTSxJQUFJLElBQUUsU0FBUyxFQUFLLFVBQVUsU0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQU0sSUFBRSxFQUE1RCxDQUE0RCxFQUFDLEVBQWhGLENBQWdGLEVBQUMsRUFDL0YsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLEVBQXJCLENBQXFCLEVBQUMsRUFDcEMsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsTUFBUSxDQUFDLEVBQXRDLENBQXNDLEVBQUMsQ0FDckQsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBQ0Qsc0NBQVU7OztJQUFWO1FBQ0Esb0RBQW9EO1FBQ2hELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELDRDQUFnQjs7OztJQUFoQixVQUFpQixHQUFHO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQUcsT0FBTyxFQUFFLENBQUM7U0FBRTtRQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBaEIsQ0FBZ0IsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzVGLENBQUM7O2dCQXJCRixVQUFVLFNBQUMsRUFBRyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O2dCQUx6QixVQUFVOzs7NEJBRG5CO0NBOEJDLEFBeEJELElBd0JDO1NBdkJZLGlCQUFpQjs7O0lBQzdCLG9DQUFpQjs7Ozs7SUFDSixpQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7ICBwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEdldE9wdGlvbnNTZXJ2aWNlIHtcbiBvcHRpb25zOiAgYW55W10gO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgIH1cbi8vXG4gIGluaXRTZXJ2aWNlKHBhdGg6IHN0cmluZyxpbWFnZXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKGA9PT09PT09PT09PT0ke3BhdGh9YCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55W10gPihwYXRoKS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiByZXN1bHQubWFwKGl0ZW0gPT4gKHsgLi4uaXRlbSwgaW1nU291cmNlOiBgJHtpbWFnZXNQYXRofS8keyBpdGVtWydpbWcnXX0ucG5nYH0pKSksXG4gICAgICB0YXAocmVzdWx0ID0+IHRoaXMub3B0aW9ucyA9IHJlc3VsdCksXG4gICAgICB0YXAocmVzdWx0ID0+IGNvbnNvbGUubG9nKGAqKioqKioqKioqKioqKiR7cmVzdWx0fWApKSxcbiAgICAgKS50b1Byb21pc2UoKTtcbiAgfVxuICBnZXRPcHRpb25zKCkge1xuICAvLyAgY29uc29sZS5sb2coYC0tLS0tLS0tLS0tLS0tLS0tJHt0aGlzLm9wdGlvbnN9YCk7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xuICB9XG5cbiAgZ2V0T3B0aW9uQnlJbWFnZShpbWcpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucykgeyAgcmV0dXJuICcnOyB9XG4gICAgcmV0dXJuICh0aGlzLm9wdGlvbnMuZmluZChpdGVtID0+IGl0ZW0uaW1nID09PSBpbWcpIHx8IHtpbWdTb3VyY2U6ICdub3RGb3VuZCd9KS5pbWdTb3VyY2U7XG4gIH1cblxuXG59XG4iXX0=
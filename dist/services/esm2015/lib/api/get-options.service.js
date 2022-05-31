/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-options.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class GetOptionsService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    //
    /**
     * @param {?} path
     * @param {?} imagesPath
     * @return {?}
     */
    initService(path, imagesPath) {
        console.log(`============${path}`);
        return this.http.get(path).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.map((/**
         * @param {?} item
         * @return {?}
         */
        item => (Object.assign({}, item, { imgSource: `${imagesPath}/${item['img']}.png` })))))), tap((/**
         * @param {?} result
         * @return {?}
         */
        result => this.options = result)), tap((/**
         * @param {?} result
         * @return {?}
         */
        result => console.log(`**************${result}`)))).toPromise();
    }
    /**
     * @return {?}
     */
    getOptions() {
        //  console.log(`-----------------${this.options}`);
        return this.options;
    }
    /**
     * @param {?} img
     * @return {?}
     */
    getOptionByImage(img) {
        if (!this.options) {
            return '';
        }
        return (this.options.find((/**
         * @param {?} item
         * @return {?}
         */
        item => item.img === img)) || { imgSource: 'notFound' }).imgSource;
    }
}
GetOptionsService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
GetOptionsService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ GetOptionsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetOptionsService_Factory() { return new GetOptionsService(i0.ɵɵinject(i1.HttpClient)); }, token: GetOptionsService, providedIn: "root" });
if (false) {
    /** @type {?} */
    GetOptionsService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    GetOptionsService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LW9wdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtb3B0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRzFDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFNUIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFLLENBQUM7Ozs7Ozs7SUFFMUMsV0FBVyxDQUFDLElBQVksRUFBQyxVQUFrQjtRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDckMsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFNLElBQUksSUFBRSxTQUFTLEVBQUUsR0FBRyxVQUFVLElBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUUsRUFBQyxFQUFDLEVBQy9GLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxFQUFDLEVBQ3BDLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FDckQsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBQ0QsVUFBVTtRQUNWLG9EQUFvRDtRQUNoRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxHQUFHO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQUcsT0FBTyxFQUFFLENBQUM7U0FBRTtRQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzVGLENBQUM7OztZQXJCRixVQUFVLFNBQUMsRUFBRyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O1lBTHpCLFVBQVU7Ozs7O0lBT2xCLG9DQUFpQjs7Ozs7SUFDSixpQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7ICBwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEdldE9wdGlvbnNTZXJ2aWNlIHtcbiBvcHRpb25zOiAgYW55W10gO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgIH1cbi8vXG4gIGluaXRTZXJ2aWNlKHBhdGg6IHN0cmluZyxpbWFnZXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKGA9PT09PT09PT09PT0ke3BhdGh9YCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55W10gPihwYXRoKS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiByZXN1bHQubWFwKGl0ZW0gPT4gKHsgLi4uaXRlbSwgaW1nU291cmNlOiBgJHtpbWFnZXNQYXRofS8keyBpdGVtWydpbWcnXX0ucG5nYH0pKSksXG4gICAgICB0YXAocmVzdWx0ID0+IHRoaXMub3B0aW9ucyA9IHJlc3VsdCksXG4gICAgICB0YXAocmVzdWx0ID0+IGNvbnNvbGUubG9nKGAqKioqKioqKioqKioqKiR7cmVzdWx0fWApKSxcbiAgICAgKS50b1Byb21pc2UoKTtcbiAgfVxuICBnZXRPcHRpb25zKCkge1xuICAvLyAgY29uc29sZS5sb2coYC0tLS0tLS0tLS0tLS0tLS0tJHt0aGlzLm9wdGlvbnN9YCk7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xuICB9XG5cbiAgZ2V0T3B0aW9uQnlJbWFnZShpbWcpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucykgeyAgcmV0dXJuICcnOyB9XG4gICAgcmV0dXJuICh0aGlzLm9wdGlvbnMuZmluZChpdGVtID0+IGl0ZW0uaW1nID09PSBpbWcpIHx8IHtpbWdTb3VyY2U6ICdub3RGb3VuZCd9KS5pbWdTb3VyY2U7XG4gIH1cblxuXG59XG4iXX0=
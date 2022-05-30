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
        result => this.options = result))).toPromise();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LW9wdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtb3B0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRzFDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFNUIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFLLENBQUM7Ozs7Ozs7SUFFMUMsV0FBVyxDQUFDLElBQVksRUFBQyxVQUFrQjtRQUNyQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDekMsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFNLElBQUksSUFBRSxTQUFTLEVBQUUsR0FBRyxVQUFVLElBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUUsRUFBQyxFQUFDLEVBQy9GLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxFQUFDLENBQ3BDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUNELFVBQVU7UUFDVixvREFBb0Q7UUFDaEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsR0FBRztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUFHLE9BQU8sRUFBRSxDQUFDO1NBQUU7UUFDbEMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1RixDQUFDOzs7WUFuQkYsVUFBVSxTQUFDLEVBQUcsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OztZQUx6QixVQUFVOzs7OztJQU9sQixvQ0FBaUI7Ozs7O0lBQ0osaUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoeyAgcHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBHZXRPcHRpb25zU2VydmljZSB7XG4gb3B0aW9uczogIGFueVtdIDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7ICB9XG4vL1xuICBpbml0U2VydmljZShwYXRoOiBzdHJpbmcsaW1hZ2VzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55W10gPihwYXRoKS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiByZXN1bHQubWFwKGl0ZW0gPT4gKHsgLi4uaXRlbSwgaW1nU291cmNlOiBgJHtpbWFnZXNQYXRofS8keyBpdGVtWydpbWcnXX0ucG5nYH0pKSksXG4gICAgICB0YXAocmVzdWx0ID0+IHRoaXMub3B0aW9ucyA9IHJlc3VsdCksXG4gICAgICkudG9Qcm9taXNlKCk7XG4gIH1cbiAgZ2V0T3B0aW9ucygpIHtcbiAgLy8gIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tLSR7dGhpcy5vcHRpb25zfWApO1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucztcbiAgfVxuXG4gIGdldE9wdGlvbkJ5SW1hZ2UoaW1nKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMpIHsgIHJldHVybiAnJzsgfVxuICAgIHJldHVybiAodGhpcy5vcHRpb25zLmZpbmQoaXRlbSA9PiBpdGVtLmltZyA9PT0gaW1nKSB8fCB7aW1nU291cmNlOiAnbm90Rm91bmQnfSkuaW1nU291cmNlO1xuICB9XG5cblxufVxuIl19
/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/get-img-path.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { GetOptionsService } from 'services';
export class GetImgPathPipe {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
    }
    /**
     * @param {?} img
     * @return {?}
     */
    transform(img) {
        return this.service.getOptionByImage(img);
    }
}
GetImgPathPipe.decorators = [
    { type: Pipe, args: [{ name: 'getImgPath' },] }
];
/** @nocollapse */
GetImgPathPipe.ctorParameters = () => [
    { type: GetOptionsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GetImgPathPipe.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWltZy1wYXRoLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waXBlcy8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9nZXQtaW1nLXBhdGgucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUk3QyxNQUFNLE9BQU8sY0FBYzs7OztJQUN6QixZQUFvQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUFJLENBQUM7Ozs7O0lBQ25ELFNBQVMsQ0FBQyxHQUFXO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUFMRixJQUFJLFNBQUMsRUFBRyxJQUFJLEVBQUUsWUFBWSxFQUFDOzs7O1lBSG5CLGlCQUFpQjs7Ozs7OztJQUtaLGlDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2V0T3B0aW9uc1NlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcyc7IFxyXG5cclxuXHJcbkBQaXBlKHsgIG5hbWU6ICdnZXRJbWdQYXRoJ30pXHJcbmV4cG9ydCBjbGFzcyBHZXRJbWdQYXRoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogR2V0T3B0aW9uc1NlcnZpY2UpIHsgfVxyXG4gIHRyYW5zZm9ybShpbWc6IHN0cmluZyk6IHN0cmluZyAge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5nZXRPcHRpb25CeUltYWdlKGltZyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
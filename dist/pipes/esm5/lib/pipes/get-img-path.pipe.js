/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/get-img-path.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { GetOptionsService } from 'services';
var GetImgPathPipe = /** @class */ (function () {
    function GetImgPathPipe(service) {
        this.service = service;
    }
    /**
     * @param {?} img
     * @return {?}
     */
    GetImgPathPipe.prototype.transform = /**
     * @param {?} img
     * @return {?}
     */
    function (img) {
        return this.service.getOptionByImage(img);
    };
    GetImgPathPipe.decorators = [
        { type: Pipe, args: [{ name: 'getImgPath' },] }
    ];
    /** @nocollapse */
    GetImgPathPipe.ctorParameters = function () { return [
        { type: GetOptionsService }
    ]; };
    return GetImgPathPipe;
}());
export { GetImgPathPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GetImgPathPipe.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWltZy1wYXRoLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waXBlcy8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9nZXQtaW1nLXBhdGgucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUc3QztJQUVFLHdCQUFvQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUFJLENBQUM7Ozs7O0lBQ25ELGtDQUFTOzs7O0lBQVQsVUFBVSxHQUFXO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnQkFMRixJQUFJLFNBQUMsRUFBRyxJQUFJLEVBQUUsWUFBWSxFQUFDOzs7O2dCQUhuQixpQkFBaUI7O0lBVTFCLHFCQUFDO0NBQUEsQUFQRCxJQU9DO1NBTlksY0FBYzs7Ozs7O0lBQ2IsaUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHZXRPcHRpb25zU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzJzsgXHJcblxyXG5cclxuQFBpcGUoeyAgbmFtZTogJ2dldEltZ1BhdGgnfSlcclxuZXhwb3J0IGNsYXNzIEdldEltZ1BhdGhQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBHZXRPcHRpb25zU2VydmljZSkgeyB9XHJcbiAgdHJhbnNmb3JtKGltZzogc3RyaW5nKTogc3RyaW5nICB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmdldE9wdGlvbkJ5SW1hZ2UoaW1nKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
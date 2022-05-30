/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/http-request.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var HttpRequestModel = /** @class */ (function () {
    function HttpRequestModel(copy) {
        this.params = {};
        this.body = {};
        Object.assign(this, copy);
        this.params = Object.entries(this.params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), val = _b[1];
            return val !== null;
        }))
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), val = _b[1];
            return val !== undefined;
        }))
            .reduce((/**
         * @param {?} state
         * @param {?} __1
         * @return {?}
         */
        function (state, _a) {
            var _b;
            var _c = tslib_1.__read(_a, 2), key = _c[0], val = _c[1];
            return (tslib_1.__assign({}, state, (_b = {}, _b[key] = val, _b)));
        }), {});
        if (Array.isArray(this.body)) {
            return;
        }
        this.body = Object.entries(this.body)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), val = _b[1];
            return val !== null;
        }))
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), val = _b[1];
            return val !== undefined;
        }))
            .reduce((/**
         * @param {?} state
         * @param {?} __1
         * @return {?}
         */
        function (state, _a) {
            var _b;
            var _c = tslib_1.__read(_a, 2), key = _c[0], val = _c[1];
            return (tslib_1.__assign({}, state, (_b = {}, _b[key] = val, _b)));
        }), {});
        this.body = Object.keys(this.body).length ? this.body : null;
    }
    Object.defineProperty(HttpRequestModel.prototype, "queryParams", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = this._queryParams(this.params);
            return /&/.test(result) ? "?" + result : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} params
     * @param {?=} prefix
     * @return {?}
     */
    HttpRequestModel.prototype._queryParams = /**
     * @private
     * @param {?} params
     * @param {?=} prefix
     * @return {?}
     */
    function (params, prefix) {
        var _this = this;
        if (prefix === void 0) { prefix = ''; }
        /** @type {?} */
        var result = Object.entries(params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), value = _b[1];
            return typeof (value) !== 'object';
        }))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
            return "" + prefix + key + "=" + decodeURIComponent(value);
        }))
            .join('&');
        return Object.entries(params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), value = _b[1];
            return typeof (value) === 'object';
        }))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
            return _this._queryParams(value, key + ".");
        }))
            .concat(result)
            .join('&');
    };
    Object.defineProperty(HttpRequestModel.prototype, "fullUrl", {
        get: /**
         * @return {?}
         */
        function () { return "" + this.url + this.action; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpRequestModel.prototype, "fullParams", {
        get: /**
         * @return {?}
         */
        function () {
            return this.params;
        },
        enumerable: true,
        configurable: true
    });
    return HttpRequestModel;
}());
export { HttpRequestModel };
if (false) {
    /** @type {?} */
    HttpRequestModel.prototype.component;
    /** @type {?} */
    HttpRequestModel.prototype.logMessage;
    /** @type {?} */
    HttpRequestModel.prototype.url;
    /** @type {?} */
    HttpRequestModel.prototype.action;
    /** @type {?} */
    HttpRequestModel.prototype.params;
    /** @type {?} */
    HttpRequestModel.prototype.body;
    /** @type {?} */
    HttpRequestModel.prototype.isText;
    /** @type {?} */
    HttpRequestModel.prototype.headers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXF1ZXN0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHlwZXMvIiwic291cmNlcyI6WyJsaWIvbW9kZWwvaHR0cC1yZXF1ZXN0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBO0lBVUUsMEJBQVksSUFBZ0M7UUFMNUMsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixTQUFJLEdBQVEsRUFBRSxDQUFDO1FBS2IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDdEMsTUFBTTs7OztRQUFDLFVBQUMsRUFBTztnQkFBUCwwQkFBTyxFQUFKLFdBQUc7WUFBTSxPQUFBLEdBQUcsS0FBSyxJQUFJO1FBQVosQ0FBWSxFQUFDO2FBQ2pDLE1BQU07Ozs7UUFBQyxVQUFDLEVBQU87Z0JBQVAsMEJBQU8sRUFBSixXQUFHO1lBQU0sT0FBQSxHQUFHLEtBQUssU0FBUztRQUFqQixDQUFpQixFQUFDO2FBQ3RDLE1BQU07Ozs7O1FBQUMsVUFBQyxLQUFLLEVBQUUsRUFBVTs7Z0JBQVYsMEJBQVUsRUFBVCxXQUFHLEVBQUUsV0FBRztZQUFNLE9BQUEsc0JBQU0sS0FBSyxlQUFHLEdBQUcsSUFBRyxHQUFHLE9BQUc7UUFBMUIsQ0FBMEIsR0FBRSxFQUFFLENBQUMsQ0FBQztRQUVqRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRXpDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xDLE1BQU07Ozs7UUFBQyxVQUFDLEVBQU87Z0JBQVAsMEJBQU8sRUFBSixXQUFHO1lBQU0sT0FBQSxHQUFHLEtBQUssSUFBSTtRQUFaLENBQVksRUFBQzthQUNqQyxNQUFNOzs7O1FBQUMsVUFBQyxFQUFPO2dCQUFQLDBCQUFPLEVBQUosV0FBRztZQUFNLE9BQUEsR0FBRyxLQUFLLFNBQVM7UUFBakIsQ0FBaUIsRUFBQzthQUN0QyxNQUFNOzs7OztRQUFDLFVBQUMsS0FBSyxFQUFFLEVBQVU7O2dCQUFWLDBCQUFVLEVBQVQsV0FBRyxFQUFFLFdBQUc7WUFBTSxPQUFBLHNCQUMxQixLQUFLLGVBQUcsR0FBRyxJQUFHLEdBQUcsT0FDcEI7UUFGNkIsQ0FFN0IsR0FBRSxFQUFFLENBQUMsQ0FBQztRQUVWLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0QsQ0FBQztJQUVELHNCQUFJLHlDQUFXOzs7O1FBQWY7O2dCQUVRLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFN0MsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFJLE1BQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzlDLENBQUM7OztPQUFBOzs7Ozs7O0lBRU8sdUNBQVk7Ozs7OztJQUFwQixVQUFxQixNQUFjLEVBQUUsTUFBbUI7UUFBeEQsaUJBV0M7UUFYb0MsdUJBQUEsRUFBQSxXQUFtQjs7WUFDaEQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQ2xDLE1BQU07Ozs7UUFBQyxVQUFDLEVBQVM7Z0JBQVQsMEJBQVMsRUFBTixhQUFLO1lBQU0sT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUTtRQUEzQixDQUEyQixFQUFDO2FBQ2xELEdBQUc7Ozs7UUFBQyxVQUFDLEVBQVk7Z0JBQVosMEJBQVksRUFBWCxXQUFHLEVBQUUsYUFBSztZQUFNLE9BQUEsS0FBRyxNQUFNLEdBQUcsR0FBRyxTQUFJLGtCQUFrQixDQUFDLEtBQUssQ0FBRztRQUE5QyxDQUE4QyxFQUFDO2FBQ3JFLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFWixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQzFCLE1BQU07Ozs7UUFBQyxVQUFDLEVBQVM7Z0JBQVQsMEJBQVMsRUFBTixhQUFLO1lBQU0sT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUTtRQUEzQixDQUEyQixFQUFDO2FBQ2xELEdBQUc7Ozs7UUFBQyxVQUFDLEVBQVk7Z0JBQVosMEJBQVksRUFBWCxXQUFHLEVBQUUsYUFBSztZQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUssR0FBRyxNQUFHLENBQUM7UUFBbkMsQ0FBbUMsRUFBQzthQUMxRCxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELHNCQUFJLHFDQUFPOzs7O1FBQVgsY0FBZ0IsT0FBTyxLQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQVEsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRXJELHNCQUFJLHdDQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFDSCx1QkFBQztBQUFELENBQUMsQUF2REQsSUF1REM7Ozs7SUF0REMscUNBQWtCOztJQUNsQixzQ0FBbUI7O0lBQ25CLCtCQUFZOztJQUNaLGtDQUFlOztJQUNmLGtDQUFvQjs7SUFDcEIsZ0NBQWU7O0lBQ2Ysa0NBQWdCOztJQUNoQixtQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIdHRwUmVxdWVzdE1vZGVsIHtcclxuICBjb21wb25lbnQ6IHN0cmluZztcclxuICBsb2dNZXNzYWdlOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgYWN0aW9uOiBzdHJpbmc7XHJcbiAgcGFyYW1zOiBvYmplY3QgPSB7fTtcclxuICBib2R5OiBhbnkgPSB7fTtcclxuICBpc1RleHQ6IGJvb2xlYW47XHJcbiAgaGVhZGVyczogSHR0cEhlYWRlcnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvcHk/OiBQYXJ0aWFsPEh0dHBSZXF1ZXN0TW9kZWw+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvcHkpO1xyXG5cclxuICAgIHRoaXMucGFyYW1zID0gT2JqZWN0LmVudHJpZXModGhpcy5wYXJhbXMpXHJcbiAgICAgIC5maWx0ZXIoKFssIHZhbF0pID0+IHZhbCAhPT0gbnVsbClcclxuICAgICAgLmZpbHRlcigoWywgdmFsXSkgPT4gdmFsICE9PSB1bmRlZmluZWQpXHJcbiAgICAgIC5yZWR1Y2UoKHN0YXRlLCBba2V5LCB2YWxdKSA9PiAoeyAuLi5zdGF0ZSwgW2tleV06IHZhbCB9KSwge30pO1xyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuYm9keSkpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgdGhpcy5ib2R5ID0gT2JqZWN0LmVudHJpZXModGhpcy5ib2R5KVxyXG4gICAgICAuZmlsdGVyKChbLCB2YWxdKSA9PiB2YWwgIT09IG51bGwpXHJcbiAgICAgIC5maWx0ZXIoKFssIHZhbF0pID0+IHZhbCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAucmVkdWNlKChzdGF0ZSwgW2tleSwgdmFsXSkgPT4gKHtcclxuICAgICAgICAuLi5zdGF0ZSwgW2tleV06IHZhbFxyXG4gICAgICB9KSwge30pO1xyXG5cclxuICAgIHRoaXMuYm9keSA9IE9iamVjdC5rZXlzKHRoaXMuYm9keSkubGVuZ3RoID8gdGhpcy5ib2R5IDogbnVsbDtcclxuICB9XHJcblxyXG4gIGdldCBxdWVyeVBhcmFtcygpIHtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9xdWVyeVBhcmFtcyh0aGlzLnBhcmFtcyk7XHJcblxyXG4gICAgcmV0dXJuIC8mLy50ZXN0KHJlc3VsdCkgPyBgPyR7cmVzdWx0fWAgOiAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3F1ZXJ5UGFyYW1zKHBhcmFtczogb2JqZWN0LCBwcmVmaXg6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5lbnRyaWVzKHBhcmFtcylcclxuICAgICAgLmZpbHRlcigoWywgdmFsdWVdKSA9PiB0eXBlb2YgKHZhbHVlKSAhPT0gJ29iamVjdCcpXHJcbiAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4gYCR7cHJlZml4fSR7a2V5fT0ke2RlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9YClcclxuICAgICAgLmpvaW4oJyYnKTtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMocGFyYW1zKVxyXG4gICAgICAuZmlsdGVyKChbLCB2YWx1ZV0pID0+IHR5cGVvZiAodmFsdWUpID09PSAnb2JqZWN0JylcclxuICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB0aGlzLl9xdWVyeVBhcmFtcyh2YWx1ZSwgYCR7a2V5fS5gKSlcclxuICAgICAgLmNvbmNhdChyZXN1bHQpXHJcbiAgICAgIC5qb2luKCcmJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgZnVsbFVybCgpIHsgcmV0dXJuIGAke3RoaXMudXJsfSR7dGhpcy5hY3Rpb259YDsgfVxyXG5cclxuICBnZXQgZnVsbFBhcmFtcygpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmFtcztcclxuICB9XHJcbn1cclxuIl19
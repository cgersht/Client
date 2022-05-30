/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/http-request.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class HttpRequestModel {
    /**
     * @param {?=} copy
     */
    constructor(copy) {
        this.params = {};
        this.body = {};
        Object.assign(this, copy);
        this.params = Object.entries(this.params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, val]) => val !== null))
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, val]) => val !== undefined))
            .reduce((/**
         * @param {?} state
         * @param {?} __1
         * @return {?}
         */
        (state, [key, val]) => (Object.assign({}, state, { [key]: val }))), {});
        if (Array.isArray(this.body)) {
            return;
        }
        this.body = Object.entries(this.body)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, val]) => val !== null))
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, val]) => val !== undefined))
            .reduce((/**
         * @param {?} state
         * @param {?} __1
         * @return {?}
         */
        (state, [key, val]) => (Object.assign({}, state, { [key]: val }))), {});
        this.body = Object.keys(this.body).length ? this.body : null;
    }
    /**
     * @return {?}
     */
    get queryParams() {
        /** @type {?} */
        const result = this._queryParams(this.params);
        return /&/.test(result) ? `?${result}` : '';
    }
    /**
     * @private
     * @param {?} params
     * @param {?=} prefix
     * @return {?}
     */
    _queryParams(params, prefix = '') {
        /** @type {?} */
        const result = Object.entries(params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, value]) => typeof (value) !== 'object'))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ([key, value]) => `${prefix}${key}=${decodeURIComponent(value)}`))
            .join('&');
        return Object.entries(params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, value]) => typeof (value) === 'object'))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ([key, value]) => this._queryParams(value, `${key}.`)))
            .concat(result)
            .join('&');
    }
    /**
     * @return {?}
     */
    get fullUrl() { return `${this.url}${this.action}`; }
    /**
     * @return {?}
     */
    get fullParams() {
        return this.params;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXF1ZXN0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHlwZXMvIiwic291cmNlcyI6WyJsaWIvbW9kZWwvaHR0cC1yZXF1ZXN0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLGdCQUFnQjs7OztJQVUzQixZQUFZLElBQWdDO1FBTDVDLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUtiLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3RDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksRUFBQzthQUNqQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUM7YUFDdEMsTUFBTTs7Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsbUJBQU0sS0FBSyxJQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFHLEdBQUUsRUFBRSxDQUFDLENBQUM7UUFFakUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUV6QyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUM7YUFDakMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFDO2FBQ3RDLE1BQU07Ozs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLG1CQUMxQixLQUFLLElBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQ3BCLEdBQUUsRUFBRSxDQUFDLENBQUM7UUFFVixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQy9ELENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7O2NBRVAsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUU3QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7O0lBRU8sWUFBWSxDQUFDLE1BQWMsRUFBRSxTQUFpQixFQUFFOztjQUNoRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDbEMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxFQUFDO2FBQ2xELEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLE1BQU0sR0FBRyxHQUFHLElBQUksa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQzthQUNyRSxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRVosT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzthQUMxQixNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLEVBQUM7YUFDbEQsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBQzthQUMxRCxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELElBQUksT0FBTyxLQUFLLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7SUFFckQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Q0FDRjs7O0lBdERDLHFDQUFrQjs7SUFDbEIsc0NBQW1COztJQUNuQiwrQkFBWTs7SUFDWixrQ0FBZTs7SUFDZixrQ0FBb0I7O0lBQ3BCLGdDQUFlOztJQUNmLGtDQUFnQjs7SUFDaEIsbUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5leHBvcnQgY2xhc3MgSHR0cFJlcXVlc3RNb2RlbCB7XHJcbiAgY29tcG9uZW50OiBzdHJpbmc7XHJcbiAgbG9nTWVzc2FnZTogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGFjdGlvbjogc3RyaW5nO1xyXG4gIHBhcmFtczogb2JqZWN0ID0ge307XHJcbiAgYm9keTogYW55ID0ge307XHJcbiAgaXNUZXh0OiBib29sZWFuO1xyXG4gIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb3B5PzogUGFydGlhbDxIdHRwUmVxdWVzdE1vZGVsPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb3B5KTtcclxuXHJcbiAgICB0aGlzLnBhcmFtcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMucGFyYW1zKVxyXG4gICAgICAuZmlsdGVyKChbLCB2YWxdKSA9PiB2YWwgIT09IG51bGwpXHJcbiAgICAgIC5maWx0ZXIoKFssIHZhbF0pID0+IHZhbCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAucmVkdWNlKChzdGF0ZSwgW2tleSwgdmFsXSkgPT4gKHsgLi4uc3RhdGUsIFtrZXldOiB2YWwgfSksIHt9KTtcclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmJvZHkpKSB7IHJldHVybjsgfVxyXG5cclxuICAgIHRoaXMuYm9keSA9IE9iamVjdC5lbnRyaWVzKHRoaXMuYm9keSlcclxuICAgICAgLmZpbHRlcigoWywgdmFsXSkgPT4gdmFsICE9PSBudWxsKVxyXG4gICAgICAuZmlsdGVyKChbLCB2YWxdKSA9PiB2YWwgIT09IHVuZGVmaW5lZClcclxuICAgICAgLnJlZHVjZSgoc3RhdGUsIFtrZXksIHZhbF0pID0+ICh7XHJcbiAgICAgICAgLi4uc3RhdGUsIFtrZXldOiB2YWxcclxuICAgICAgfSksIHt9KTtcclxuXHJcbiAgICB0aGlzLmJvZHkgPSBPYmplY3Qua2V5cyh0aGlzLmJvZHkpLmxlbmd0aCA/IHRoaXMuYm9keSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgcXVlcnlQYXJhbXMoKSB7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcXVlcnlQYXJhbXModGhpcy5wYXJhbXMpO1xyXG5cclxuICAgIHJldHVybiAvJi8udGVzdChyZXN1bHQpID8gYD8ke3Jlc3VsdH1gIDogJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9xdWVyeVBhcmFtcyhwYXJhbXM6IG9iamVjdCwgcHJlZml4OiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBPYmplY3QuZW50cmllcyhwYXJhbXMpXHJcbiAgICAgIC5maWx0ZXIoKFssIHZhbHVlXSkgPT4gdHlwZW9mICh2YWx1ZSkgIT09ICdvYmplY3QnKVxyXG4gICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IGAke3ByZWZpeH0ke2tleX09JHtkZWNvZGVVUklDb21wb25lbnQodmFsdWUpfWApXHJcbiAgICAgIC5qb2luKCcmJyk7XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHBhcmFtcylcclxuICAgICAgLmZpbHRlcigoWywgdmFsdWVdKSA9PiB0eXBlb2YgKHZhbHVlKSA9PT0gJ29iamVjdCcpXHJcbiAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4gdGhpcy5fcXVlcnlQYXJhbXModmFsdWUsIGAke2tleX0uYCkpXHJcbiAgICAgIC5jb25jYXQocmVzdWx0KVxyXG4gICAgICAuam9pbignJicpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZ1bGxVcmwoKSB7IHJldHVybiBgJHt0aGlzLnVybH0ke3RoaXMuYWN0aW9ufWA7IH1cclxuXHJcbiAgZ2V0IGZ1bGxQYXJhbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJhbXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==
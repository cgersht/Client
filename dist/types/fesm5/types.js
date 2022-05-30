import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { __read, __assign } from 'tslib';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TypesService = /** @class */ (function () {
    function TypesService() {
    }
    TypesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TypesService.ctorParameters = function () { return []; };
    /** @nocollapse */ TypesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TypesService_Factory() { return new TypesService(); }, token: TypesService, providedIn: "root" });
    return TypesService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TypesComponent = /** @class */ (function () {
    function TypesComponent() {
    }
    /**
     * @return {?}
     */
    TypesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TypesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-types',
                    template: "\n    <p>\n      types works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    TypesComponent.ctorParameters = function () { return []; };
    return TypesComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TypesModule = /** @class */ (function () {
    function TypesModule() {
    }
    TypesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TypesComponent],
                    imports: [],
                    exports: [TypesComponent]
                },] }
    ];
    return TypesModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/http-request.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            var _b = __read(_a, 2), val = _b[1];
            return val !== null;
        }))
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), val = _b[1];
            return val !== undefined;
        }))
            .reduce((/**
         * @param {?} state
         * @param {?} __1
         * @return {?}
         */
        function (state, _a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], val = _c[1];
            return (__assign({}, state, (_b = {}, _b[key] = val, _b)));
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
            var _b = __read(_a, 2), val = _b[1];
            return val !== null;
        }))
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), val = _b[1];
            return val !== undefined;
        }))
            .reduce((/**
         * @param {?} state
         * @param {?} __1
         * @return {?}
         */
        function (state, _a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], val = _c[1];
            return (__assign({}, state, (_b = {}, _b[key] = val, _b)));
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
            var _b = __read(_a, 2), value = _b[1];
            return typeof (value) !== 'object';
        }))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            return "" + prefix + key + "=" + decodeURIComponent(value);
        }))
            .join('&');
        return Object.entries(params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), value = _b[1];
            return typeof (value) === 'object';
        }))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/customer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Customer() { }
if (false) {
    /** @type {?} */
    Customer.prototype.CustomerID;
    /** @type {?} */
    Customer.prototype.CustomerName;
    /** @type {?} */
    Customer.prototype.DBName;
    /** @type {?|undefined} */
    Customer.prototype.remarks;
    /** @type {?} */
    Customer.prototype.Modules;
    /** @type {?|undefined} */
    Customer.prototype.VersionID;
    /** @type {?} */
    Customer.prototype.LastBackupPath;
    /** @type {?} */
    Customer.prototype.SiteName;
    /** @type {?|undefined} */
    Customer.prototype.UppgradeStatus;
    /** @type {?} */
    Customer.prototype.IsBackup;
    /** @type {?|undefined} */
    Customer.prototype.PermittedIps;
    /** @type {?|undefined} */
    Customer.prototype.PrevVersitionId;
    /** @type {?|undefined} */
    Customer.prototype.DependByDepartments;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/ip-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IpConfig() { }
if (false) {
    /** @type {?|undefined} */
    IpConfig.prototype.servicePath;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/settings.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Setting() { }
if (false) {
    /** @type {?|undefined} */
    Setting.prototype.companyName;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { HttpRequestModel, TypesComponent, TypesModule, TypesService };
//# sourceMappingURL=types.js.map

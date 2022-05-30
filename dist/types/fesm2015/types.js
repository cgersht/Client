import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TypesService {
    constructor() { }
}
TypesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TypesService.ctorParameters = () => [];
/** @nocollapse */ TypesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TypesService_Factory() { return new TypesService(); }, token: TypesService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TypesComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TypesComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-types',
                template: `
    <p>
      types works!
    </p>
  `
            }] }
];
/** @nocollapse */
TypesComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TypesModule {
}
TypesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TypesComponent],
                imports: [],
                exports: [TypesComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/http-request.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpRequestModel {
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

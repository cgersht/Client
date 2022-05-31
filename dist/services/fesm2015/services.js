import { Injectable, ɵɵdefineInjectable, Component, NgModule, ɵɵinject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { HttpRequestModel } from 'types';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ServicesService {
    constructor() { }
}
ServicesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ServicesService.ctorParameters = () => [];
/** @nocollapse */ ServicesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ServicesService_Factory() { return new ServicesService(); }, token: ServicesService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ServicesComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ServicesComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-services',
                template: `
    <p>
      services works!
    </p>
  `
            }] }
];
/** @nocollapse */
ServicesComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ServicesModule {
}
ServicesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ServicesComponent],
                imports: [],
                exports: [ServicesComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-options.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetOptionsService {
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
/** @nocollapse */ GetOptionsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function GetOptionsService_Factory() { return new GetOptionsService(ɵɵinject(HttpClient)); }, token: GetOptionsService, providedIn: "root" });
if (false) {
    /** @type {?} */
    GetOptionsService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    GetOptionsService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigurationService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    initConfiguration(path) {
        return combineLatest(this.http.get(`${path}/ipConfig.json`), this.http.get(`${path}/settingsConfig.json`)).pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        response => [this.ips, this.settingConfig] = response))).toPromise();
    }
}
ConfigurationService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ConfigurationService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ ConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(ɵɵinject(HttpClient)); }, token: ConfigurationService, providedIn: "root" });
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/http-service.base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class HttpServiceBase {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
        this.index = 0;
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    get$(httpRequest) {
        if (httpRequest.isText) {
            return this._get$(httpRequest);
        }
        return this.http.get(httpRequest.fullUrl, { params: Object.assign({}, httpRequest.fullParams) });
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    delete$(httpRequest) {
        return this.http.delete(httpRequest.fullUrl, { params: Object.assign({}, httpRequest.fullParams) });
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    post$(httpRequest) {
        if (httpRequest.isText) {
            return this._post$(httpRequest);
        }
        return this.http.post(httpRequest.fullUrl, httpRequest.body, { headers: httpRequest.headers, params: Object.assign({}, httpRequest.fullParams) });
    }
    /**
     * @param {?} httpRequest
     * @return {?}
     */
    request$(httpRequest) {
        return this.http.request('GET', httpRequest.fullUrl, {
            params: Object.assign({}, httpRequest.fullParams),
            observe: 'response',
            responseType: 'blob',
        });
    }
    /**
     * @param {?} httpRequest
     * @return {?}
     */
    requestPost$(httpRequest) {
        return this.http.request('POST', httpRequest.fullUrl, {
            body: Object.assign({}, httpRequest.body),
            params: Object.assign({}, httpRequest.fullParams),
            observe: 'response',
            responseType: 'blob',
        });
    }
    /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    _get$(httpRequest) {
        return this.http.get(httpRequest.fullUrl, { params: Object.assign({}, httpRequest.fullParams), responseType: 'text' });
    }
    /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    _post$(httpRequest) {
        return this.http.post(httpRequest.fullUrl, httpRequest.body, { params: Object.assign({}, httpRequest.fullParams), responseType: 'text' });
    }
}
HttpServiceBase.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpServiceBase.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigurationService }
];
if (false) {
    /** @type {?} */
    HttpServiceBase.prototype.index;
    /**
     * @type {?}
     * @protected
     */
    HttpServiceBase.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    HttpServiceBase.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-customers.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetCustomersService extends HttpServiceBase {
    /**
     * @private
     * @return {?}
     */
    get _serverUrl() {
        return `${this.config.ips.servicePath}customers/`;
    }
    /**
     * @return {?}
     */
    getCustomersList$() {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getCustomers',
        }));
        //return this.http.get<Customers>('http://localhost:3030/customers/getCustomers');
    }
}
GetCustomersService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ GetCustomersService.ngInjectableDef = ɵɵdefineInjectable({ factory: function GetCustomersService_Factory() { return new GetCustomersService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: GetCustomersService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: services.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ConfigurationService, GetCustomersService, GetOptionsService, ServicesComponent, ServicesModule, ServicesService, HttpServiceBase as ɵa };
//# sourceMappingURL=services.js.map

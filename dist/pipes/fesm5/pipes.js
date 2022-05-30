import { Injectable, ɵɵdefineInjectable, Component, NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetOptionsService } from 'services';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipesService = /** @class */ (function () {
    function PipesService() {
    }
    PipesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PipesService.ctorParameters = function () { return []; };
    /** @nocollapse */ PipesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function PipesService_Factory() { return new PipesService(); }, token: PipesService, providedIn: "root" });
    return PipesService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipesComponent = /** @class */ (function () {
    function PipesComponent() {
    }
    /**
     * @return {?}
     */
    PipesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PipesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-pipes',
                    template: "\n    <p>\n      pipes works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    PipesComponent.ctorParameters = function () { return []; };
    return PipesComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [PipesComponent],
                    imports: [],
                    exports: [PipesComponent]
                },] }
    ];
    return PipesModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/get-img-path.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    GetImgPathPipe.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/all-pipes.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AllPipesModule = /** @class */ (function () {
    function AllPipesModule() {
    }
    AllPipesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [GetImgPathPipe],
                    imports: [
                        CommonModule
                    ],
                    exports: [GetImgPathPipe]
                },] }
    ];
    return AllPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: pipes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AllPipesModule, PipesComponent, PipesModule, PipesService, GetImgPathPipe as ɵa };
//# sourceMappingURL=pipes.js.map

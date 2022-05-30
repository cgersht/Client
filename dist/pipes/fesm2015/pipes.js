import { Injectable, ɵɵdefineInjectable, Component, NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetOptionsService } from 'services';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipesService {
    constructor() { }
}
PipesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PipesService.ctorParameters = () => [];
/** @nocollapse */ PipesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function PipesService_Factory() { return new PipesService(); }, token: PipesService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipesComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PipesComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-pipes',
                template: `
    <p>
      pipes works!
    </p>
  `
            }] }
];
/** @nocollapse */
PipesComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipesModule {
}
PipesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [PipesComponent],
                imports: [],
                exports: [PipesComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/get-img-path.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetImgPathPipe {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/all-pipes.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AllPipesModule {
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

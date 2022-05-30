(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('services')) :
    typeof define === 'function' && define.amd ? define('pipes', ['exports', '@angular/core', '@angular/common', 'services'], factory) :
    (global = global || self, factory(global.pipes = {}, global.ng.core, global.ng.common, global.services));
}(this, (function (exports, core, common, services) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/pipes.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PipesService = /** @class */ (function () {
        function PipesService() {
        }
        PipesService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PipesService.ctorParameters = function () { return []; };
        /** @nocollapse */ PipesService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function PipesService_Factory() { return new PipesService(); }, token: PipesService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
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
            { type: core.Pipe, args: [{ name: 'getImgPath' },] }
        ];
        /** @nocollapse */
        GetImgPathPipe.ctorParameters = function () { return [
            { type: services.GetOptionsService }
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
            { type: core.NgModule, args: [{
                        declarations: [GetImgPathPipe],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [GetImgPathPipe]
                    },] }
        ];
        return AllPipesModule;
    }());

    exports.AllPipesModule = AllPipesModule;
    exports.PipesComponent = PipesComponent;
    exports.PipesModule = PipesModule;
    exports.PipesService = PipesService;
    exports.ɵa = GetImgPathPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pipes.umd.js.map

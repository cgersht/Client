(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material'), require('@angular/material/paginator'), require('@angular/material/table')) :
    typeof define === 'function' && define.amd ? define('components', ['exports', '@angular/core', '@angular/common', '@angular/material', '@angular/material/paginator', '@angular/material/table'], factory) :
    (global = global || self, factory(global.components = {}, global.ng.core, global.ng.common, global.ng.material, global.ng.material.paginator, global.ng.material.table));
}(this, (function (exports, core, common, material, paginator, table) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsService = /** @class */ (function () {
        function ComponentsService() {
        }
        ComponentsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ComponentsService.ctorParameters = function () { return []; };
        /** @nocollapse */ ComponentsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(); }, token: ComponentsService, providedIn: "root" });
        return ComponentsService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsComponent = /** @class */ (function () {
        function ComponentsComponent() {
        }
        /**
         * @return {?}
         */
        ComponentsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        ComponentsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-components',
                        template: "\n    <p>\n      components works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        ComponentsComponent.ctorParameters = function () { return []; };
        return ComponentsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsModule = /** @class */ (function () {
        function ComponentsModule() {
        }
        ComponentsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ComponentsComponent],
                        imports: [],
                        exports: [ComponentsComponent]
                    },] }
        ];
        return ComponentsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/table/table.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableComponent = /** @class */ (function () {
        function TableComponent() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        }
        /**
         * @return {?}
         */
        TableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.displayedColumns = this.columns.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var name = _a.name;
                return name;
            }));
            // this.dataSource = new MatTableDataSource<any>(this.rows);
            //this.dataSource.paginator = this.paginator;
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        TableComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var rows = changes.rows;
            if (rows) {
                this.dataSource = new material.MatTableDataSource(rows.currentValue);
                this.dataSource.paginator = this.paginator;
            }
        };
        TableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-table',
                        template: " \n<div class=\"mat-elevation-z8\">\n  <mat-table [dataSource]=\"dataSource\" >\n  <ng-container *ngFor=\"let column of columns\" [matColumnDef]=  \"column.name\">\n \n      <mat-header-cell *matHeaderCellDef [innerText]=\"column.header\"> </mat-header-cell>\n       <mat-cell *matCellDef=\"let element\" > \n            <span [innerText]=\"element[column.name]\"></span> \n\n       </mat-cell> \n     \n  </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>  \n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  \n  </mat-table>  \n  <mat-paginator  [pageSizeOptions]=\"[5, 10, 20]\"    showFirstLastButtons ></mat-paginator>  \n\n</div>\n ",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["lib-table{width:100%;height:100%;display:flex;flex-direction:column}lib-table table{width:100%;display:flex;flex-direction:column}lib-table table tbody{display:flex;flex-direction:column;color:red}lib-table .mat-elevation-z8{display:flex;flex-direction:column}"]
                    }] }
        ];
        /** @nocollapse */
        TableComponent.ctorParameters = function () { return []; };
        TableComponent.propDecorators = {
            columns: [{ type: core.Input }],
            rows: [{ type: core.Input }],
            paginator: [{ type: core.ViewChild, args: [paginator.MatPaginator, { static: true },] }]
        };
        return TableComponent;
    }());
    if (false) {
        /** @type {?} */
        TableComponent.prototype.columns;
        /** @type {?} */
        TableComponent.prototype.rows;
        /** @type {?} */
        TableComponent.prototype.displayedColumns;
        /** @type {?} */
        TableComponent.prototype.dataSource;
        /** @type {?} */
        TableComponent.prototype.paginator;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/table/table.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableModule = /** @class */ (function () {
        function TableModule() {
        }
        TableModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TableComponent],
                        imports: [
                            common.CommonModule,
                            table.MatTableModule,
                            material.MatPaginatorModule
                        ],
                        exports: [TableComponent]
                    },] }
        ];
        return TableModule;
    }());

    exports.ComponentsComponent = ComponentsComponent;
    exports.ComponentsModule = ComponentsModule;
    exports.ComponentsService = ComponentsService;
    exports.TableModule = TableModule;
    exports.ɵa = TableComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components.umd.js.map

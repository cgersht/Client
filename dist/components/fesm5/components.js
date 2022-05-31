import { Injectable, ɵɵdefineInjectable, Component, NgModule, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatPaginatorModule } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentsService = /** @class */ (function () {
    function ComponentsService() {
    }
    ComponentsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ComponentsService.ctorParameters = function () { return []; };
    /** @nocollapse */ ComponentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(); }, token: ComponentsService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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
            this.dataSource = new MatTableDataSource(rows.currentValue);
            this.dataSource.paginator = this.paginator;
        }
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-table',
                    template: " \n<div class=\"mat-elevation-z8\">\n  <mat-table [dataSource]=\"dataSource\" >\n  <ng-container *ngFor=\"let column of columns\" [matColumnDef]=  \"column.name\">\n \n      <mat-header-cell *matHeaderCellDef [innerText]=\"column.header\"> </mat-header-cell>\n       <mat-cell *matCellDef=\"let element\" > \n            <span [innerText]=\"element[column.name]\"></span> \n\n       </mat-cell> \n     \n  </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>  \n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  \n  </mat-table>  \n  <mat-paginator  [pageSizeOptions]=\"[5, 10, 20]\"    showFirstLastButtons ></mat-paginator>  \n\n</div>\n ",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["lib-table{width:100%;height:100%;display:flex;flex-direction:column}lib-table table{width:100%;display:flex;flex-direction:column}lib-table table tbody{display:flex;flex-direction:column;color:red}lib-table .mat-elevation-z8{display:flex;flex-direction:column}"]
                }] }
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return []; };
    TableComponent.propDecorators = {
        columns: [{ type: Input }],
        rows: [{ type: Input }],
        paginator: [{ type: ViewChild, args: [MatPaginator, { static: true },] }]
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
        { type: NgModule, args: [{
                    declarations: [TableComponent],
                    imports: [
                        CommonModule,
                        MatTableModule,
                        MatPaginatorModule
                    ],
                    exports: [TableComponent]
                },] }
    ];
    return TableModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: components.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ComponentsComponent, ComponentsModule, ComponentsService, TableModule, TableComponent as ɵa };
//# sourceMappingURL=components.js.map

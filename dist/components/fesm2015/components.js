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
class ComponentsService {
    constructor() { }
}
ComponentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ComponentsService.ctorParameters = () => [];
/** @nocollapse */ ComponentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(); }, token: ComponentsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ComponentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-components',
                template: `
    <p>
      components works!
    </p>
  `
            }] }
];
/** @nocollapse */
ComponentsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentsModule {
}
ComponentsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ComponentsComponent],
                imports: [],
                exports: [ComponentsComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableComponent {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.displayedColumns = this.columns.map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ name }) => name));
        // this.dataSource = new MatTableDataSource<any>(this.rows);
        //this.dataSource.paginator = this.paginator;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { rows } = changes;
        if (rows) {
            this.dataSource = new MatTableDataSource(rows.currentValue);
            this.dataSource.paginator = this.paginator;
        }
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-table',
                template: " \n<div class=\"mat-elevation-z8\">\n  <mat-table [dataSource]=\"dataSource\" >\n  <ng-container *ngFor=\"let column of columns\" [matColumnDef]=  \"column.name\">\n \n      <mat-header-cell *matHeaderCellDef [innerText]=\"column.header\"> </mat-header-cell>\n       <mat-cell *matCellDef=\"let element\" > \n            <span [innerText]=\"element[column.name]\"></span> \n\n       </mat-cell> \n     \n  </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>  \n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  \n  </mat-table>  \n  <mat-paginator  [pageSizeOptions]=\"[5, 10, 20]\"    showFirstLastButtons ></mat-paginator>  \n\n</div>\n ",
                encapsulation: ViewEncapsulation.None,
                styles: ["lib-table{width:100%;height:100%;display:flex;flex-direction:column}lib-table table{width:100%;display:flex;flex-direction:column}lib-table table tbody{display:flex;flex-direction:column;color:red}lib-table .mat-elevation-z8{display:flex;flex-direction:column}"]
            }] }
];
/** @nocollapse */
TableComponent.ctorParameters = () => [];
TableComponent.propDecorators = {
    columns: [{ type: Input }],
    rows: [{ type: Input }],
    paginator: [{ type: ViewChild, args: [MatPaginator, { static: true },] }]
};
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
class TableModule {
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

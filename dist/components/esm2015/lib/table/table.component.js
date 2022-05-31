/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
export class TableComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRWpILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQVF6RCxNQUFNLE9BQU8sY0FBYztJQVd6QjtRQU5BLHFCQUFnQixHQUFhLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFNdEQsQ0FBQzs7OztJQUVqQixRQUFRO1FBQ0gsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFJLENBQUE7UUFHakUsNERBQTREO1FBQzNELDZDQUE2QztJQUMvQyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtjQUN6QixFQUFDLElBQUksRUFBQyxHQUFHLE9BQU87UUFDdEIsSUFBRyxJQUFJLEVBQUM7WUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDNUM7SUFDSixDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixndEJBQXFDO2dCQUVyQyxhQUFhLEVBQUMsaUJBQWlCLENBQUMsSUFBSTs7YUFDckM7Ozs7O3NCQUdFLEtBQUs7bUJBQ0wsS0FBSzt3QkFPTCxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzs7OztJQVJ2QyxpQ0FBMEI7O0lBQzFCLDhCQUFvQjs7SUFFcEIsMENBQXNFOztJQUN0RSxvQ0FBVTs7SUFJVixtQ0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tZXIsQ29sdW1uIH0gZnJvbSAndHlwZXMnOyBcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOlZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gXG4gIEBJbnB1dCgpIGNvbHVtbnM6Q29sdW1uW107XG4gIEBJbnB1dCgpIHJvd3M6YW55W107XG5cbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlIFxuICAgIFxuICAgIFxuXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yLCB7c3RhdGljOiB0cnVlfSkgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gdGhpcy5jb2x1bW5zLm1hcCgoe25hbWV9KSA9PiBuYW1lICAgKVxuICAgICBcbiAgICBcbiAgIC8vIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55Pih0aGlzLnJvd3MpO1xuICAgIC8vdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICBjb25zdCB7cm93c30gPSBjaGFuZ2VzO1xuICAgICBpZihyb3dzKXtcbiAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4ocm93cy5jdXJyZW50VmFsdWUpO1xuICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgfVxuICB9XG59XG4iXX0=
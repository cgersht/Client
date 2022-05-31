/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
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
export { TableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRWpILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUV6RDtJQWlCRTtRQU5BLHFCQUFnQixHQUFhLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFNdEQsQ0FBQzs7OztJQUVqQixpQ0FBUTs7O0lBQVI7UUFDSyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxFQUFNO2dCQUFMLGNBQUk7WUFBTSxPQUFBLElBQUk7UUFBSixDQUFJLEVBQUksQ0FBQTtRQUdqRSw0REFBNEQ7UUFDM0QsNkNBQTZDO0lBQy9DLENBQUM7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ3hCLElBQUEsbUJBQUk7UUFDWCxJQUFHLElBQUksRUFBQztZQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBTSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUM1QztJQUNKLENBQUM7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGd0QkFBcUM7b0JBRXJDLGFBQWEsRUFBQyxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDckM7Ozs7OzBCQUdFLEtBQUs7dUJBQ0wsS0FBSzs0QkFPTCxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzs7SUFrQnpDLHFCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0E1QlksY0FBYzs7O0lBRXpCLGlDQUEwQjs7SUFDMUIsOEJBQW9COztJQUVwQiwwQ0FBc0U7O0lBQ3RFLG9DQUFVOztJQUlWLG1DQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXN0b21lcixDb2x1bW4gfSBmcm9tICd0eXBlcyc7IFxuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3J9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246Vmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiBcbiAgQElucHV0KCkgY29sdW1uczpDb2x1bW5bXTtcbiAgQElucHV0KCkgcm93czphbnlbXTtcblxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsncG9zaXRpb24nLCAnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJ107XG4gIGRhdGFTb3VyY2UgXG4gICAgXG4gICAgXG5cbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IsIHtzdGF0aWM6IHRydWV9KSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLmNvbHVtbnMubWFwKCh7bmFtZX0pID0+IG5hbWUgICApXG4gICAgIFxuICAgIFxuICAgLy8gdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KHRoaXMucm93cyk7XG4gICAgLy90aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgIGNvbnN0IHtyb3dzfSA9IGNoYW5nZXM7XG4gICAgIGlmKHJvd3Mpe1xuICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55Pihyb3dzLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICB9XG4gIH1cbn1cbiJdfQ==
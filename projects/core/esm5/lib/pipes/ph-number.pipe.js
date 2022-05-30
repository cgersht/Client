import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { stringIsNumber } from '../functions/string-is-number';
import { DecimalPipe } from '@angular/common';
var PhNumberPipe = /** @class */ (function (_super) {
    tslib_1.__extends(PhNumberPipe, _super);
    function PhNumberPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhNumberPipe.prototype.transform = function (value) {
        if (stringIsNumber(value)) {
            return _super.prototype.transform.call(this, value);
        }
        return value || '';
    };
    PhNumberPipe = tslib_1.__decorate([
        Pipe({ name: 'phNumber' })
    ], PhNumberPipe);
    return PhNumberPipe;
}(DecimalPipe));
export { PhNumberPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGgtbnVtYmVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3BoLW51bWJlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzlDO0lBQW1DLHdDQUFXO0lBQTlDOztJQU1BLENBQUM7SUFKQyxnQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNyQixJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUFFLE9BQU8saUJBQU0sU0FBUyxZQUFDLEtBQUssQ0FBQyxDQUFDO1NBQUU7UUFDN0QsT0FBTyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFMVSxZQUFZO1FBRHhCLElBQUksQ0FBQyxFQUFHLElBQUksRUFBRSxVQUFVLEVBQUMsQ0FBQztPQUNkLFlBQVksQ0FNeEI7SUFBRCxtQkFBQztDQUFBLEFBTkQsQ0FBbUMsV0FBVyxHQU03QztTQU5ZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzdHJpbmdJc051bWJlciB9IGZyb20gJy4uL2Z1bmN0aW9ucy9zdHJpbmctaXMtbnVtYmVyJztcbmltcG9ydCB7IERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQFBpcGUoeyAgbmFtZTogJ3BoTnVtYmVyJ30pXG5leHBvcnQgY2xhc3MgUGhOdW1iZXJQaXBlICBleHRlbmRzIERlY2ltYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChzdHJpbmdJc051bWJlcih2YWx1ZSkpIHsgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSk7IH1cbiAgICByZXR1cm4gdmFsdWUgfHwgJyc7XG4gIH1cbn1cblxuIFxuIl19
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import { stringIsDate } from '../functions/string-is-date';
import * as moment_ from 'moment';
var moment = moment_;
var MyDatePipe = /** @class */ (function (_super) {
    tslib_1.__extends(MyDatePipe, _super);
    function MyDatePipe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.regexFormats = [
            /[0-9]{4}[-/][0-9]{2}[-/][0-9]{2}/,
            /[0-9]{2}[-/][0-9]{2}[-/][0-9]{4}/
        ];
        return _this;
    }
    MyDatePipe.prototype.dateIsValidByMoment = function (value) {
        return moment(value).isValid();
    };
    MyDatePipe.prototype.dateByMoment = function (value, format) {
        return moment(value).format(format);
    };
    MyDatePipe.prototype.transform = function (value, format) {
        if (!value) {
            return value;
        }
        if (this.dateIsValidByMoment(value)) {
            return this.dateByMoment(value, format);
        }
        if (this.regexFormats.some(function (re) { return re.test(value); })) {
            return _super.prototype.transform.call(this, value, format);
        }
        if (stringIsDate(value)) {
            var result = _super.prototype.transform.call(this, _super.prototype.transform.call(this, value, format), format);
            if (value.indexOf(result) >= 0) {
                return result;
            }
            return _super.prototype.transform.call(this, value, format);
        }
        return value;
    };
    MyDatePipe = tslib_1.__decorate([
        Pipe({ name: 'myDate' })
    ], MyDatePipe);
    return MyDatePipe;
}(DatePipe));
export { MyDatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9teS1kYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFM0QsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7QUFDbEMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBR3ZCO0lBQWdDLHNDQUFRO0lBRHhDO1FBQUEscUVBcUNDO1FBbkNDLGtCQUFZLEdBQUc7WUFDYixrQ0FBa0M7WUFDbEMsa0NBQWtDO1NBQ25DLENBQUE7O0lBZ0NILENBQUM7SUE5QkMsd0NBQW1CLEdBQW5CLFVBQW9CLEtBQUs7UUFDdkIsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELGlDQUFZLEdBQVosVUFBYSxLQUFLLEVBQUUsTUFBTTtRQUN4QixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELDhCQUFTLEdBQVQsVUFBVSxLQUFVLEVBQUUsTUFBbUQ7UUFDdkUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU8sS0FBSyxDQUFDO1NBQUU7UUFFN0IsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN6QztRQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFkLENBQWMsQ0FBQyxFQUFFO1lBQ2hELE9BQU8saUJBQU0sU0FBUyxZQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN2QztRQUVELElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQU0sTUFBTSxHQUFHLGlCQUFNLFNBQVMsWUFBQyxpQkFBTSxTQUFTLFlBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZFLElBQUssS0FBZ0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMxQyxPQUFPLE1BQU0sQ0FBQzthQUNmO1lBQ0QsT0FBTyxpQkFBTSxTQUFTLFlBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBakNVLFVBQVU7UUFEdEIsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDO09BQ1osVUFBVSxDQW9DdEI7SUFBRCxpQkFBQztDQUFBLEFBcENELENBQWdDLFFBQVEsR0FvQ3ZDO1NBcENZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBkYXRlRm9ybWF0cywgdGltZUZvcm1hdHMsIGRhdGVUaW1lRm9ybWF0cyB9IGZyb20gJ3R5cGVzJztcbmltcG9ydCB7IHN0cmluZ0lzRGF0ZSB9IGZyb20gJy4uL2Z1bmN0aW9ucy9zdHJpbmctaXMtZGF0ZSc7XG5cbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XG5cbkBQaXBlKHsgbmFtZTogJ215RGF0ZScgfSlcbmV4cG9ydCBjbGFzcyBNeURhdGVQaXBlIGV4dGVuZHMgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgcmVnZXhGb3JtYXRzID0gW1xuICAgIC9bMC05XXs0fVstL11bMC05XXsyfVstL11bMC05XXsyfS8sXG4gICAgL1swLTldezJ9Wy0vXVswLTldezJ9Wy0vXVswLTldezR9L1xuICBdXG5cbiAgZGF0ZUlzVmFsaWRCeU1vbWVudCh2YWx1ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtb21lbnQodmFsdWUpLmlzVmFsaWQoKTtcbiAgfVxuXG4gIGRhdGVCeU1vbWVudCh2YWx1ZSwgZm9ybWF0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoZm9ybWF0KTtcbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBmb3JtYXQ6IGRhdGVGb3JtYXRzIHwgZGF0ZVRpbWVGb3JtYXRzIHwgdGltZUZvcm1hdHMpOiBhbnkge1xuICAgIGlmICghdmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9XG5cbiAgICBpZiAodGhpcy5kYXRlSXNWYWxpZEJ5TW9tZW50KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0ZUJ5TW9tZW50KHZhbHVlLCBmb3JtYXQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJlZ2V4Rm9ybWF0cy5zb21lKHJlID0+IHJlLnRlc3QodmFsdWUpKSkge1xuICAgICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0KTtcbiAgICB9XG5cbiAgICBpZiAoc3RyaW5nSXNEYXRlKHZhbHVlKSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIudHJhbnNmb3JtKHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0KSwgZm9ybWF0KTtcbiAgICAgIGlmICgodmFsdWUgYXMgc3RyaW5nKS5pbmRleE9mKHJlc3VsdCkgPj0gMCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cblxufVxuIl19
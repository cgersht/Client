import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import { stringIsDate } from '../functions/string-is-date';
// const moment = moment_
var MyTimePipe = /** @class */ (function (_super) {
    tslib_1.__extends(MyTimePipe, _super);
    function MyTimePipe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.regexFormat = [
            /[0-9]{4}[-/][0-9]{2}[-/][0-9]{2}/,
            /[0-9]{2}[-/][0-9]{2}[-/][0-9]{4}/
        ];
        return _this;
    }
    MyTimePipe.prototype.dateIsValidByMoment = function (value) {
        return null; // moment(value).isValid();
    };
    MyTimePipe.prototype.dateByMoment = function (value, format) {
        return null; //moment(value).format(format);
    };
    MyTimePipe.prototype.transform = function (value, format) {
        if (!value) {
            return value;
        }
        if (this.dateIsValidByMoment(value)) {
            return this.dateByMoment(value, format);
        }
        if (this.regexFormat.some(function (reg) { return reg.test(value); })) {
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
    MyTimePipe = tslib_1.__decorate([
        Pipe({ name: 'myTime' })
    ], MyTimePipe);
    return MyTimePipe;
}(DatePipe));
export { MyTimePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy90aW1lLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDM0QseUJBQXlCO0FBR3pCO0lBQWdDLHNDQUFRO0lBRHhDO1FBQUEscUVBZ0NDO1FBOUJDLGlCQUFXLEdBQUc7WUFDWixrQ0FBa0M7WUFDbEMsa0NBQWtDO1NBQ25DLENBQUE7O0lBMkJILENBQUM7SUExQkMsd0NBQW1CLEdBQW5CLFVBQW9CLEtBQUs7UUFDdkIsT0FBTyxJQUFJLENBQUEsQ0FBQSwyQkFBMkI7SUFDeEMsQ0FBQztJQUVELGlDQUFZLEdBQVosVUFBYSxLQUFLLEVBQUUsTUFBTTtRQUN4QixPQUFPLElBQUksQ0FBQyxDQUFBLCtCQUErQjtJQUM3QyxDQUFDO0lBQ0QsOEJBQVMsR0FBVCxVQUFVLEtBQVUsRUFBRSxNQUFtRDtRQUN2RSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQUUsT0FBTyxLQUFLLENBQUM7U0FBRTtRQUU3QixJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7U0FBRTtRQUVoRixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBZixDQUFlLENBQUMsRUFBRTtZQUNqRCxPQUFPLGlCQUFNLFNBQVMsWUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDdkM7UUFFRCxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QixJQUFNLE1BQU0sR0FBRyxpQkFBTSxTQUFTLFlBQUMsaUJBQU0sU0FBUyxZQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN2RSxJQUFLLEtBQWdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDMUMsT0FBTyxNQUFNLENBQUM7YUFDZjtZQUNELE9BQU8saUJBQU0sU0FBUyxZQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQTdCVSxVQUFVO1FBRHRCLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztPQUNaLFVBQVUsQ0ErQnRCO0lBQUQsaUJBQUM7Q0FBQSxBQS9CRCxDQUFnQyxRQUFRLEdBK0J2QztTQS9CWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQgbW9tZW50XyBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBkYXRlVGltZUZvcm1hdHMsIGRhdGVGb3JtYXRzLCB0aW1lRm9ybWF0cyB9IGZyb20gJ3R5cGVzJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IHN0cmluZ0lzRGF0ZSB9IGZyb20gJy4uL2Z1bmN0aW9ucy9zdHJpbmctaXMtZGF0ZSc7XG4vLyBjb25zdCBtb21lbnQgPSBtb21lbnRfXG5cbkBQaXBlKHsgbmFtZTogJ215VGltZScgfSlcbmV4cG9ydCBjbGFzcyBNeVRpbWVQaXBlIGV4dGVuZHMgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgcmVnZXhGb3JtYXQgPSBbXG4gICAgL1swLTldezR9Wy0vXVswLTldezJ9Wy0vXVswLTldezJ9LyxcbiAgICAvWzAtOV17Mn1bLS9dWzAtOV17Mn1bLS9dWzAtOV17NH0vXG4gIF1cbiAgZGF0ZUlzVmFsaWRCeU1vbWVudCh2YWx1ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBudWxsLy8gbW9tZW50KHZhbHVlKS5pc1ZhbGlkKCk7XG4gIH1cblxuICBkYXRlQnlNb21lbnQodmFsdWUsIGZvcm1hdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG51bGw7Ly9tb21lbnQodmFsdWUpLmZvcm1hdChmb3JtYXQpO1xuICB9XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBmb3JtYXQ6IGRhdGVGb3JtYXRzIHwgZGF0ZVRpbWVGb3JtYXRzIHwgdGltZUZvcm1hdHMpOiBhbnkge1xuICAgIGlmICghdmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9XG5cbiAgICBpZiAodGhpcy5kYXRlSXNWYWxpZEJ5TW9tZW50KHZhbHVlKSkgeyByZXR1cm4gdGhpcy5kYXRlQnlNb21lbnQodmFsdWUsIGZvcm1hdCkgfVxuXG4gICAgaWYgKHRoaXMucmVnZXhGb3JtYXQuc29tZShyZWcgPT4gcmVnLnRlc3QodmFsdWUpKSkge1xuICAgICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0KTtcbiAgICB9XG5cbiAgICBpZiAoc3RyaW5nSXNEYXRlKHZhbHVlKSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIudHJhbnNmb3JtKHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0KSwgZm9ybWF0KTtcbiAgICAgIGlmICgodmFsdWUgYXMgc3RyaW5nKS5pbmRleE9mKHJlc3VsdCkgPj0gMCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbn1cbiJdfQ==
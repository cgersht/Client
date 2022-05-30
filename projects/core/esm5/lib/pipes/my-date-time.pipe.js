import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import { stringIsDate } from '../functions/string-is-date';
//const moment = moment_
var MyDateTimePipe = /** @class */ (function (_super) {
    tslib_1.__extends(MyDateTimePipe, _super);
    function MyDateTimePipe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.regexFormat = [
            /[0-9]{4}[-/][0-9]{2}[-/][0-9]{2}/,
            /[0-9]{2}[-/][0-9]{2}[-/][0-9]{4}/
        ];
        return _this;
    }
    MyDateTimePipe.prototype.dateIsValidByMoment = function (value) {
        return null; // moment(value).isValid();
    };
    MyDateTimePipe.prototype.dateByMoment = function (value, format) {
        return null; // moment(value).format(format);
    };
    MyDateTimePipe.prototype.transform = function (value, format) {
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
    MyDateTimePipe = tslib_1.__decorate([
        Pipe({ name: 'myDateTime' })
    ], MyDateTimePipe);
    return MyDateTimePipe;
}(DatePipe));
export { MyDateTimePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZGF0ZS10aW1lLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL215LWRhdGUtdGltZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTNELHdCQUF3QjtBQUV4QjtJQUFvQywwQ0FBUTtJQUQ1QztRQUFBLHFFQWdDQztRQTlCQyxpQkFBVyxHQUFHO1lBQ1osa0NBQWtDO1lBQ2xDLGtDQUFrQztTQUNuQyxDQUFBOztJQTJCSCxDQUFDO0lBMUJDLDRDQUFtQixHQUFuQixVQUFvQixLQUFLO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLENBQUEsMkJBQTJCO0lBQ3pDLENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsS0FBSyxFQUFFLE1BQU07UUFDeEIsT0FBTyxJQUFJLENBQUEsQ0FBQSxnQ0FBZ0M7SUFDN0MsQ0FBQztJQUNELGtDQUFTLEdBQVQsVUFBVSxLQUFVLEVBQUUsTUFBdUI7UUFDM0MsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU8sS0FBSyxDQUFDO1NBQUU7UUFFN0IsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1NBQUU7UUFFaEYsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQWYsQ0FBZSxDQUFDLEVBQUU7WUFDakQsT0FBTyxpQkFBTSxTQUFTLFlBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkIsSUFBTSxNQUFNLEdBQUcsaUJBQU0sU0FBUyxZQUFDLGlCQUFNLFNBQVMsWUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDdkUsSUFBSyxLQUFnQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzFDLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7WUFDRCxPQUFPLGlCQUFNLFNBQVMsWUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUE3QlUsY0FBYztRQUQxQixJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUM7T0FDaEIsY0FBYyxDQStCMUI7SUFBRCxxQkFBQztDQUFBLEFBL0JELENBQW9DLFFBQVEsR0ErQjNDO1NBL0JZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vL2ltcG9ydCBtb21lbnRfIGZyb20gJ21vbWVudCdcbmltcG9ydCB7IGRhdGVUaW1lRm9ybWF0cyB9IGZyb20gJ3R5cGVzJztcbmltcG9ydCB7IHN0cmluZ0lzRGF0ZSB9IGZyb20gJy4uL2Z1bmN0aW9ucy9zdHJpbmctaXMtZGF0ZSc7XG5cbi8vY29uc3QgbW9tZW50ID0gbW9tZW50X1xuQFBpcGUoeyBuYW1lOiAnbXlEYXRlVGltZScgfSlcbmV4cG9ydCBjbGFzcyBNeURhdGVUaW1lUGlwZSBleHRlbmRzIERhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHJlZ2V4Rm9ybWF0ID0gW1xuICAgIC9bMC05XXs0fVstL11bMC05XXsyfVstL11bMC05XXsyfS8sXG4gICAgL1swLTldezJ9Wy0vXVswLTldezJ9Wy0vXVswLTldezR9L1xuICBdXG4gIGRhdGVJc1ZhbGlkQnlNb21lbnQodmFsdWUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbnVsbDsvLyBtb21lbnQodmFsdWUpLmlzVmFsaWQoKTtcbiAgfVxuXG4gIGRhdGVCeU1vbWVudCh2YWx1ZSwgZm9ybWF0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gbnVsbC8vIG1vbWVudCh2YWx1ZSkuZm9ybWF0KGZvcm1hdCk7XG4gIH1cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGZvcm1hdDogZGF0ZVRpbWVGb3JtYXRzKTogYW55IHtcbiAgICBpZiAoIXZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfVxuXG4gICAgaWYgKHRoaXMuZGF0ZUlzVmFsaWRCeU1vbWVudCh2YWx1ZSkpIHsgcmV0dXJuIHRoaXMuZGF0ZUJ5TW9tZW50KHZhbHVlLCBmb3JtYXQpIH1cblxuICAgIGlmICh0aGlzLnJlZ2V4Rm9ybWF0LnNvbWUocmVnID0+IHJlZy50ZXN0KHZhbHVlKSkpIHtcbiAgICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUsIGZvcm1hdCk7XG4gICAgfVxuXG4gICAgaWYgKHN0cmluZ0lzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLnRyYW5zZm9ybShzdXBlci50cmFuc2Zvcm0odmFsdWUsIGZvcm1hdCksIGZvcm1hdCk7XG4gICAgICBpZiAoKHZhbHVlIGFzIHN0cmluZykuaW5kZXhPZihyZXN1bHQpID49IDApIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUsIGZvcm1hdCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG59XG4iXX0=
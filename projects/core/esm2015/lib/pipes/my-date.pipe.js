import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import { stringIsDate } from '../functions/string-is-date';
import * as moment_ from 'moment';
const moment = moment_;
let MyDatePipe = class MyDatePipe extends DatePipe {
    constructor() {
        super(...arguments);
        this.regexFormats = [
            /[0-9]{4}[-/][0-9]{2}[-/][0-9]{2}/,
            /[0-9]{2}[-/][0-9]{2}[-/][0-9]{4}/
        ];
    }
    dateIsValidByMoment(value) {
        return moment(value).isValid();
    }
    dateByMoment(value, format) {
        return moment(value).format(format);
    }
    transform(value, format) {
        if (!value) {
            return value;
        }
        if (this.dateIsValidByMoment(value)) {
            return this.dateByMoment(value, format);
        }
        if (this.regexFormats.some(re => re.test(value))) {
            return super.transform(value, format);
        }
        if (stringIsDate(value)) {
            const result = super.transform(super.transform(value, format), format);
            if (value.indexOf(result) >= 0) {
                return result;
            }
            return super.transform(value, format);
        }
        return value;
    }
};
MyDatePipe = tslib_1.__decorate([
    Pipe({ name: 'myDate' })
], MyDatePipe);
export { MyDatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9teS1kYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFM0QsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7QUFDbEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBR3ZCLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVcsU0FBUSxRQUFRO0lBRHhDOztRQUVFLGlCQUFZLEdBQUc7WUFDYixrQ0FBa0M7WUFDbEMsa0NBQWtDO1NBQ25DLENBQUE7SUFnQ0gsQ0FBQztJQTlCQyxtQkFBbUIsQ0FBQyxLQUFLO1FBQ3ZCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU07UUFDeEIsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBVSxFQUFFLE1BQW1EO1FBQ3ZFLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztTQUFFO1FBRTdCLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hELE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDdkM7UUFFRCxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZFLElBQUssS0FBZ0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMxQyxPQUFPLE1BQU0sQ0FBQzthQUNmO1lBQ0QsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUdGLENBQUE7QUFwQ1ksVUFBVTtJQUR0QixJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7R0FDWixVQUFVLENBb0N0QjtTQXBDWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZGF0ZUZvcm1hdHMsIHRpbWVGb3JtYXRzLCBkYXRlVGltZUZvcm1hdHMgfSBmcm9tICd0eXBlcyc7XG5pbXBvcnQgeyBzdHJpbmdJc0RhdGUgfSBmcm9tICcuLi9mdW5jdGlvbnMvc3RyaW5nLWlzLWRhdGUnO1xuXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xuXG5AUGlwZSh7IG5hbWU6ICdteURhdGUnIH0pXG5leHBvcnQgY2xhc3MgTXlEYXRlUGlwZSBleHRlbmRzIERhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHJlZ2V4Rm9ybWF0cyA9IFtcbiAgICAvWzAtOV17NH1bLS9dWzAtOV17Mn1bLS9dWzAtOV17Mn0vLFxuICAgIC9bMC05XXsyfVstL11bMC05XXsyfVstL11bMC05XXs0fS9cbiAgXVxuXG4gIGRhdGVJc1ZhbGlkQnlNb21lbnQodmFsdWUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5pc1ZhbGlkKCk7XG4gIH1cblxuICBkYXRlQnlNb21lbnQodmFsdWUsIGZvcm1hdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KGZvcm1hdCk7XG4gIH1cblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgZm9ybWF0OiBkYXRlRm9ybWF0cyB8IGRhdGVUaW1lRm9ybWF0cyB8IHRpbWVGb3JtYXRzKTogYW55IHtcbiAgICBpZiAoIXZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfVxuXG4gICAgaWYgKHRoaXMuZGF0ZUlzVmFsaWRCeU1vbWVudCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGVCeU1vbWVudCh2YWx1ZSwgZm9ybWF0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZWdleEZvcm1hdHMuc29tZShyZSA9PiByZS50ZXN0KHZhbHVlKSkpIHtcbiAgICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUsIGZvcm1hdCk7XG4gICAgfVxuXG4gICAgaWYgKHN0cmluZ0lzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLnRyYW5zZm9ybShzdXBlci50cmFuc2Zvcm0odmFsdWUsIGZvcm1hdCksIGZvcm1hdCk7XG4gICAgICBpZiAoKHZhbHVlIGFzIHN0cmluZykuaW5kZXhPZihyZXN1bHQpID49IDApIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUsIGZvcm1hdCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG5cbn1cbiJdfQ==
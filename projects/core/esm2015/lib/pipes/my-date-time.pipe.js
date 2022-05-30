import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import { stringIsDate } from '../functions/string-is-date';
//const moment = moment_
let MyDateTimePipe = class MyDateTimePipe extends DatePipe {
    //const moment = moment_
    constructor() {
        super(...arguments);
        this.regexFormat = [
            /[0-9]{4}[-/][0-9]{2}[-/][0-9]{2}/,
            /[0-9]{2}[-/][0-9]{2}[-/][0-9]{4}/
        ];
    }
    dateIsValidByMoment(value) {
        return null; // moment(value).isValid();
    }
    dateByMoment(value, format) {
        return null; // moment(value).format(format);
    }
    transform(value, format) {
        if (!value) {
            return value;
        }
        if (this.dateIsValidByMoment(value)) {
            return this.dateByMoment(value, format);
        }
        if (this.regexFormat.some(reg => reg.test(value))) {
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
MyDateTimePipe = tslib_1.__decorate([
    Pipe({ name: 'myDateTime' })
], MyDateTimePipe);
export { MyDateTimePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZGF0ZS10aW1lLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL215LWRhdGUtdGltZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTNELHdCQUF3QjtBQUV4QixJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFlLFNBQVEsUUFBUTtJQUY1Qyx3QkFBd0I7SUFDeEI7O1FBRUUsZ0JBQVcsR0FBRztZQUNaLGtDQUFrQztZQUNsQyxrQ0FBa0M7U0FDbkMsQ0FBQTtJQTJCSCxDQUFDO0lBMUJDLG1CQUFtQixDQUFDLEtBQUs7UUFDdkIsT0FBTyxJQUFJLENBQUMsQ0FBQSwyQkFBMkI7SUFDekMsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTTtRQUN4QixPQUFPLElBQUksQ0FBQSxDQUFBLGdDQUFnQztJQUM3QyxDQUFDO0lBQ0QsU0FBUyxDQUFDLEtBQVUsRUFBRSxNQUF1QjtRQUMzQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQUUsT0FBTyxLQUFLLENBQUM7U0FBRTtRQUU3QixJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7U0FBRTtRQUVoRixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2pELE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDdkM7UUFFRCxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZFLElBQUssS0FBZ0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMxQyxPQUFPLE1BQU0sQ0FBQzthQUNmO1lBQ0QsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUVGLENBQUE7QUEvQlksY0FBYztJQUQxQixJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUM7R0FDaEIsY0FBYyxDQStCMUI7U0EvQlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vaW1wb3J0IG1vbWVudF8gZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgZGF0ZVRpbWVGb3JtYXRzIH0gZnJvbSAndHlwZXMnO1xuaW1wb3J0IHsgc3RyaW5nSXNEYXRlIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3N0cmluZy1pcy1kYXRlJztcblxuLy9jb25zdCBtb21lbnQgPSBtb21lbnRfXG5AUGlwZSh7IG5hbWU6ICdteURhdGVUaW1lJyB9KVxuZXhwb3J0IGNsYXNzIE15RGF0ZVRpbWVQaXBlIGV4dGVuZHMgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgcmVnZXhGb3JtYXQgPSBbXG4gICAgL1swLTldezR9Wy0vXVswLTldezJ9Wy0vXVswLTldezJ9LyxcbiAgICAvWzAtOV17Mn1bLS9dWzAtOV17Mn1bLS9dWzAtOV17NH0vXG4gIF1cbiAgZGF0ZUlzVmFsaWRCeU1vbWVudCh2YWx1ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBudWxsOy8vIG1vbWVudCh2YWx1ZSkuaXNWYWxpZCgpO1xuICB9XG5cbiAgZGF0ZUJ5TW9tZW50KHZhbHVlLCBmb3JtYXQpOiBzdHJpbmcge1xuICAgIHJldHVybiBudWxsLy8gbW9tZW50KHZhbHVlKS5mb3JtYXQoZm9ybWF0KTtcbiAgfVxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgZm9ybWF0OiBkYXRlVGltZUZvcm1hdHMpOiBhbnkge1xuICAgIGlmICghdmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9XG5cbiAgICBpZiAodGhpcy5kYXRlSXNWYWxpZEJ5TW9tZW50KHZhbHVlKSkgeyByZXR1cm4gdGhpcy5kYXRlQnlNb21lbnQodmFsdWUsIGZvcm1hdCkgfVxuXG4gICAgaWYgKHRoaXMucmVnZXhGb3JtYXQuc29tZShyZWcgPT4gcmVnLnRlc3QodmFsdWUpKSkge1xuICAgICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0KTtcbiAgICB9XG5cbiAgICBpZiAoc3RyaW5nSXNEYXRlKHZhbHVlKSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIudHJhbnNmb3JtKHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0KSwgZm9ybWF0KTtcbiAgICAgIGlmICgodmFsdWUgYXMgc3RyaW5nKS5pbmRleE9mKHJlc3VsdCkgPj0gMCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbn1cbiJdfQ==
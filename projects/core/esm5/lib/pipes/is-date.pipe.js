import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { dateTimeFormats, dateFormats, timeFormats } from 'types';
import mom from 'moment';
var moment = mom;
var IsDatePipe = /** @class */ (function () {
    function IsDatePipe() {
    }
    IsDatePipe.prototype.transform = function (value, args) {
        // if (!isNaN(+value)) { return null; }
        var dateTimePatterns = Object.entries(dateTimeFormats).map(function (_a) {
            var _b = tslib_1.__read(_a, 2), key = _b[0], val = _b[1];
            return val;
        }) || [];
        var datePatterns = Object.entries(dateFormats).map(function (_a) {
            var _b = tslib_1.__read(_a, 2), key = _b[0], val = _b[1];
            return val;
        }) || [];
        var timePatterns = Object.entries(timeFormats).map(function (_a) {
            var _b = tslib_1.__read(_a, 2), key = _b[0], val = _b[1];
            return val;
        }) || [];
        // const patterns = [...dateTimePatterns, ...datePatterns, ...timePatterns, moment.ISO_8601];
        // for (const pattern of patterns) {
        //   const m = value && /UTC/i.test(value) ? moment(new Date(value), pattern, true) : moment(value, pattern, true);
        //   if (m.isValid()) {
        //     const date = m.toDate();
        //     return date.getFullYear() > 1970 ? date : null;
        //   }
        // }
        return null;
    };
    IsDatePipe = tslib_1.__decorate([
        Pipe({ name: 'isDate' })
    ], IsDatePipe);
    return IsDatePipe;
}());
export { IsDatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9pcy1kYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQStDLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNsRSxPQUFPLEdBQUcsTUFBTSxRQUFRLENBQUM7QUFDekIsSUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBR25CO0lBQUE7SUFzQkEsQ0FBQztJQXBCQyw4QkFBUyxHQUFULFVBQVUsS0FBVSxFQUFFLElBQVU7UUFFOUIsdUNBQXVDO1FBQ3ZDLElBQU0sZ0JBQWdCLEdBQXNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBVTtnQkFBViwwQkFBVSxFQUFULFdBQUcsRUFBRSxXQUFHO1lBQU0sT0FBQSxHQUFHO1FBQUgsQ0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNHLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBVTtnQkFBViwwQkFBVSxFQUFULFdBQUcsRUFBRSxXQUFHO1lBQU0sT0FBQSxHQUFHO1FBQUgsQ0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hGLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBVTtnQkFBViwwQkFBVSxFQUFULFdBQUcsRUFBRSxXQUFHO1lBQU0sT0FBQSxHQUFHO1FBQUgsQ0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWhGLDZGQUE2RjtRQUU3RixvQ0FBb0M7UUFDcEMsbUhBQW1IO1FBQ25ILHVCQUF1QjtRQUN2QiwrQkFBK0I7UUFDL0Isc0RBQXNEO1FBQ3RELE1BQU07UUFDTixJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBbkJVLFVBQVU7UUFEdEIsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDO09BQ1osVUFBVSxDQXNCdEI7SUFBRCxpQkFBQztDQUFBLEFBdEJELElBc0JDO1NBdEJZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBNb2R1bGVXaXRoQ29tcG9uZW50RmFjdG9yaWVzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkYXRlVGltZUZvcm1hdHMsIGRhdGVGb3JtYXRzLCB0aW1lRm9ybWF0cyB9IGZyb20gJ3R5cGVzJztcbmltcG9ydCBtb20gZnJvbSAnbW9tZW50JztcbmNvbnN0IG1vbWVudCA9IG1vbTtcblxuQFBpcGUoeyBuYW1lOiAnaXNEYXRlJyB9KVxuZXhwb3J0IGNsYXNzIElzRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XG5cbiAgICAvLyBpZiAoIWlzTmFOKCt2YWx1ZSkpIHsgcmV0dXJuIG51bGw7IH1cbiAgICBjb25zdCBkYXRlVGltZVBhdHRlcm5zOiBkYXRlVGltZUZvcm1hdHNbXSA9IE9iamVjdC5lbnRyaWVzKGRhdGVUaW1lRm9ybWF0cykubWFwKChba2V5LCB2YWxdKSA9PiB2YWwpIHx8IFtdO1xuICAgIGNvbnN0IGRhdGVQYXR0ZXJucyA9IE9iamVjdC5lbnRyaWVzKGRhdGVGb3JtYXRzKS5tYXAoKFtrZXksIHZhbF0pID0+IHZhbCkgfHwgW107XG4gICAgY29uc3QgdGltZVBhdHRlcm5zID0gT2JqZWN0LmVudHJpZXModGltZUZvcm1hdHMpLm1hcCgoW2tleSwgdmFsXSkgPT4gdmFsKSB8fCBbXTtcblxuICAgIC8vIGNvbnN0IHBhdHRlcm5zID0gWy4uLmRhdGVUaW1lUGF0dGVybnMsIC4uLmRhdGVQYXR0ZXJucywgLi4udGltZVBhdHRlcm5zLCBtb21lbnQuSVNPXzg2MDFdO1xuXG4gICAgLy8gZm9yIChjb25zdCBwYXR0ZXJuIG9mIHBhdHRlcm5zKSB7XG4gICAgLy8gICBjb25zdCBtID0gdmFsdWUgJiYgL1VUQy9pLnRlc3QodmFsdWUpID8gbW9tZW50KG5ldyBEYXRlKHZhbHVlKSwgcGF0dGVybiwgdHJ1ZSkgOiBtb21lbnQodmFsdWUsIHBhdHRlcm4sIHRydWUpO1xuICAgIC8vICAgaWYgKG0uaXNWYWxpZCgpKSB7XG4gICAgLy8gICAgIGNvbnN0IGRhdGUgPSBtLnRvRGF0ZSgpO1xuICAgIC8vICAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpID4gMTk3MCA/IGRhdGUgOiBudWxsO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG5cbn1cbiJdfQ==
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { dateTimeFormats, dateFormats, timeFormats } from 'types';
import mom from 'moment';
const moment = mom;
let IsDatePipe = class IsDatePipe {
    transform(value, args) {
        // if (!isNaN(+value)) { return null; }
        const dateTimePatterns = Object.entries(dateTimeFormats).map(([key, val]) => val) || [];
        const datePatterns = Object.entries(dateFormats).map(([key, val]) => val) || [];
        const timePatterns = Object.entries(timeFormats).map(([key, val]) => val) || [];
        // const patterns = [...dateTimePatterns, ...datePatterns, ...timePatterns, moment.ISO_8601];
        // for (const pattern of patterns) {
        //   const m = value && /UTC/i.test(value) ? moment(new Date(value), pattern, true) : moment(value, pattern, true);
        //   if (m.isValid()) {
        //     const date = m.toDate();
        //     return date.getFullYear() > 1970 ? date : null;
        //   }
        // }
        return null;
    }
};
IsDatePipe = tslib_1.__decorate([
    Pipe({ name: 'isDate' })
], IsDatePipe);
export { IsDatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9pcy1kYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQStDLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNsRSxPQUFPLEdBQUcsTUFBTSxRQUFRLENBQUM7QUFDekIsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBR25CLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7SUFFckIsU0FBUyxDQUFDLEtBQVUsRUFBRSxJQUFVO1FBRTlCLHVDQUF1QztRQUN2QyxNQUFNLGdCQUFnQixHQUFzQixNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0csTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hGLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVoRiw2RkFBNkY7UUFFN0Ysb0NBQW9DO1FBQ3BDLG1IQUFtSDtRQUNuSCx1QkFBdUI7UUFDdkIsK0JBQStCO1FBQy9CLHNEQUFzRDtRQUN0RCxNQUFNO1FBQ04sSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUdGLENBQUE7QUF0QlksVUFBVTtJQUR0QixJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7R0FDWixVQUFVLENBc0J0QjtTQXRCWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgTW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGF0ZVRpbWVGb3JtYXRzLCBkYXRlRm9ybWF0cywgdGltZUZvcm1hdHMgfSBmcm9tICd0eXBlcyc7XG5pbXBvcnQgbW9tIGZyb20gJ21vbWVudCc7XG5jb25zdCBtb21lbnQgPSBtb207XG5cbkBQaXBlKHsgbmFtZTogJ2lzRGF0ZScgfSlcbmV4cG9ydCBjbGFzcyBJc0RhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuXG4gICAgLy8gaWYgKCFpc05hTigrdmFsdWUpKSB7IHJldHVybiBudWxsOyB9XG4gICAgY29uc3QgZGF0ZVRpbWVQYXR0ZXJuczogZGF0ZVRpbWVGb3JtYXRzW10gPSBPYmplY3QuZW50cmllcyhkYXRlVGltZUZvcm1hdHMpLm1hcCgoW2tleSwgdmFsXSkgPT4gdmFsKSB8fCBbXTtcbiAgICBjb25zdCBkYXRlUGF0dGVybnMgPSBPYmplY3QuZW50cmllcyhkYXRlRm9ybWF0cykubWFwKChba2V5LCB2YWxdKSA9PiB2YWwpIHx8IFtdO1xuICAgIGNvbnN0IHRpbWVQYXR0ZXJucyA9IE9iamVjdC5lbnRyaWVzKHRpbWVGb3JtYXRzKS5tYXAoKFtrZXksIHZhbF0pID0+IHZhbCkgfHwgW107XG5cbiAgICAvLyBjb25zdCBwYXR0ZXJucyA9IFsuLi5kYXRlVGltZVBhdHRlcm5zLCAuLi5kYXRlUGF0dGVybnMsIC4uLnRpbWVQYXR0ZXJucywgbW9tZW50LklTT184NjAxXTtcblxuICAgIC8vIGZvciAoY29uc3QgcGF0dGVybiBvZiBwYXR0ZXJucykge1xuICAgIC8vICAgY29uc3QgbSA9IHZhbHVlICYmIC9VVEMvaS50ZXN0KHZhbHVlKSA/IG1vbWVudChuZXcgRGF0ZSh2YWx1ZSksIHBhdHRlcm4sIHRydWUpIDogbW9tZW50KHZhbHVlLCBwYXR0ZXJuLCB0cnVlKTtcbiAgICAvLyAgIGlmIChtLmlzVmFsaWQoKSkge1xuICAgIC8vICAgICBjb25zdCBkYXRlID0gbS50b0RhdGUoKTtcbiAgICAvLyAgICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSA+IDE5NzAgPyBkYXRlIDogbnVsbDtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuXG59XG4iXX0=
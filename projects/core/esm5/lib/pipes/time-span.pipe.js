import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { timeFormats } from 'types';
var TimeSpanPipe = /** @class */ (function () {
    function TimeSpanPipe() {
    }
    TimeSpanPipe.prototype.transform = function (value, format) {
        var numVal = parseInt(value, 10);
        if (!numVal && numVal !== 0) {
            return value;
        }
        var seconds = Math.floor((numVal / 1000) % 60);
        var minutes = Math.floor((numVal / (1000 * 60)) % 60);
        var hours = Math.floor((numVal / (1000 * 60 * 60)));
        var hoursText = hours < 10 ? '0' + hours : hours;
        var minutesText = minutes < 10 ? '0' + minutes : minutes;
        var secondsText = seconds < 10 ? '0' + seconds : seconds;
        if (format === timeFormats.HHmm) {
            return hoursText + ":" + minutesText;
        }
        else {
            return hoursText + ":" + minutesText + ":" + secondsText;
        }
    };
    TimeSpanPipe = tslib_1.__decorate([
        Pipe({ name: 'timeSpan' })
    ], TimeSpanPipe);
    return TimeSpanPipe;
}());
export { TimeSpanPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1zcGFuLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3RpbWUtc3Bhbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBR3BDO0lBQUE7SUFnQkEsQ0FBQztJQWRDLGdDQUFTLEdBQVQsVUFBVSxLQUFVLEVBQUUsTUFBb0I7UUFDeEMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztTQUFFO1FBQzlDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDakQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0RCxJQUFNLFNBQVMsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbkQsSUFBTSxXQUFXLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzNELElBQU0sV0FBVyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUUzRCxJQUFJLE1BQU0sS0FBSyxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQUUsT0FBVSxTQUFTLFNBQUksV0FBYSxDQUFBO1NBQUU7YUFDcEU7WUFBRSxPQUFVLFNBQVMsU0FBSSxXQUFXLFNBQUksV0FBYSxDQUFBO1NBQUU7SUFDOUQsQ0FBQztJQWZVLFlBQVk7UUFEeEIsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO09BQ2QsWUFBWSxDQWdCeEI7SUFBRCxtQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0aW1lRm9ybWF0cyB9IGZyb20gJ3R5cGVzJztcblxuQFBpcGUoeyBuYW1lOiAndGltZVNwYW4nIH0pXG5leHBvcnQgY2xhc3MgVGltZVNwYW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGZvcm1hdD86IHRpbWVGb3JtYXRzKTogYW55IHtcbiAgICBjb25zdCBudW1WYWwgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIGlmICghbnVtVmFsICYmIG51bVZhbCAhPT0gMCkgeyByZXR1cm4gdmFsdWU7IH1cbiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigobnVtVmFsIC8gMTAwMCkgJSA2MCk7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKG51bVZhbCAvICgxMDAwICogNjApKSAlIDYwKTtcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKG51bVZhbCAvICgxMDAwICogNjAgKiA2MCkpKTtcblxuICAgIGNvbnN0IGhvdXJzVGV4dCA9IGhvdXJzIDwgMTAgPyAnMCcgKyBob3VycyA6IGhvdXJzO1xuICAgIGNvbnN0IG1pbnV0ZXNUZXh0ID0gbWludXRlcyA8IDEwID8gJzAnICsgbWludXRlcyA6IG1pbnV0ZXM7XG4gICAgY29uc3Qgc2Vjb25kc1RleHQgPSBzZWNvbmRzIDwgMTAgPyAnMCcgKyBzZWNvbmRzIDogc2Vjb25kcztcblxuICAgIGlmIChmb3JtYXQgPT09IHRpbWVGb3JtYXRzLkhIbW0pIHsgcmV0dXJuIGAke2hvdXJzVGV4dH06JHttaW51dGVzVGV4dH1gIH1cbiAgICBlbHNlIHsgcmV0dXJuIGAke2hvdXJzVGV4dH06JHttaW51dGVzVGV4dH06JHtzZWNvbmRzVGV4dH1gIH1cbiAgfVxufVxuIl19
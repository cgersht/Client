import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var IsArrayPipe = /** @class */ (function () {
    function IsArrayPipe() {
    }
    IsArrayPipe.prototype.transform = function (value, args) {
        return typeof value === 'object' && Array.isArray(value);
    };
    IsArrayPipe = tslib_1.__decorate([
        Pipe({ name: 'isArray' })
    ], IsArrayPipe);
    return IsArrayPipe;
}());
export { IsArrayPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtYXJyYXkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvaXMtYXJyYXkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHcEQ7SUFBQTtJQU1BLENBQUM7SUFKQywrQkFBUyxHQUFULFVBQVUsS0FBVSxFQUFFLElBQVU7UUFDOUIsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBSlUsV0FBVztRQUR2QixJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7T0FDYixXQUFXLENBTXZCO0lBQUQsa0JBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICdpc0FycmF5JyB9KVxuZXhwb3J0IGNsYXNzIElzQXJyYXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICB9XG5cbn1cbiJdfQ==
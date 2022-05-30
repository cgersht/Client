import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { enumValueToString } from '../functions/enum-value-to-string';
var EnumToStringPipe = /** @class */ (function () {
    function EnumToStringPipe() {
    }
    EnumToStringPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return enumValueToString(args[0], value);
    };
    EnumToStringPipe = tslib_1.__decorate([
        Pipe({ name: 'enumToString' })
    ], EnumToStringPipe);
    return EnumToStringPipe;
}());
export { EnumToStringPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bS10by1zdHJpbmcucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZW51bS10by1zdHJpbmcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHdEU7SUFBQTtJQU1BLENBQUM7SUFKQyxvQ0FBUyxHQUFULFVBQVUsS0FBVTtRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQ2xDLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFKVSxnQkFBZ0I7UUFENUIsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxDQUFDO09BQ2xCLGdCQUFnQixDQU01QjtJQUFELHVCQUFDO0NBQUEsQUFORCxJQU1DO1NBTlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZW51bVZhbHVlVG9TdHJpbmcgfSBmcm9tICcuLi9mdW5jdGlvbnMvZW51bS12YWx1ZS10by1zdHJpbmcnO1xuXG5AUGlwZSh7IG5hbWU6ICdlbnVtVG9TdHJpbmcnIH0pXG5leHBvcnQgY2xhc3MgRW51bVRvU3RyaW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG4gICAgcmV0dXJuIGVudW1WYWx1ZVRvU3RyaW5nKGFyZ3NbMF0sIHZhbHVlKTtcbiAgfVxuXG59XG4iXX0=
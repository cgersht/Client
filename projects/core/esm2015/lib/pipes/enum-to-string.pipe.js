import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { enumValueToString } from '../functions/enum-value-to-string';
let EnumToStringPipe = class EnumToStringPipe {
    transform(value, ...args) {
        return enumValueToString(args[0], value);
    }
};
EnumToStringPipe = tslib_1.__decorate([
    Pipe({ name: 'enumToString' })
], EnumToStringPipe);
export { EnumToStringPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bS10by1zdHJpbmcucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZW51bS10by1zdHJpbmcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHdEUsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFFM0IsU0FBUyxDQUFDLEtBQVUsRUFBRSxHQUFHLElBQVc7UUFDbEMsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUVGLENBQUE7QUFOWSxnQkFBZ0I7SUFENUIsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxDQUFDO0dBQ2xCLGdCQUFnQixDQU01QjtTQU5ZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGVudW1WYWx1ZVRvU3RyaW5nIH0gZnJvbSAnLi4vZnVuY3Rpb25zL2VudW0tdmFsdWUtdG8tc3RyaW5nJztcblxuQFBpcGUoeyBuYW1lOiAnZW51bVRvU3RyaW5nJyB9KVxuZXhwb3J0IGNsYXNzIEVudW1Ub1N0cmluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xuICAgIHJldHVybiBlbnVtVmFsdWVUb1N0cmluZyhhcmdzWzBdLCB2YWx1ZSk7XG4gIH1cblxufVxuIl19
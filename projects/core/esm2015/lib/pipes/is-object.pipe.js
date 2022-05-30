import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let IsObjectPipe = class IsObjectPipe {
    transform(value, args) {
        return typeof value === 'object' && !Array.isArray(value);
    }
};
IsObjectPipe = tslib_1.__decorate([
    Pipe({
        name: 'isObject'
    })
], IsObjectPipe);
export { IsObjectPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtb2JqZWN0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2lzLW9iamVjdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBRXZCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBVTtRQUM5QixPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQztDQUVGLENBQUE7QUFOWSxZQUFZO0lBSHhCLElBQUksQ0FBQztRQUNKLElBQUksRUFBRSxVQUFVO0tBQ2pCLENBQUM7R0FDVyxZQUFZLENBTXhCO1NBTlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnaXNPYmplY3QnXG59KVxuZXhwb3J0IGNsYXNzIElzT2JqZWN0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhcmdzPzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gIH1cblxufVxuIl19
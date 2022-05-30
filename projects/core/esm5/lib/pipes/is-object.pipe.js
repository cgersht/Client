import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var IsObjectPipe = /** @class */ (function () {
    function IsObjectPipe() {
    }
    IsObjectPipe.prototype.transform = function (value, args) {
        return typeof value === 'object' && !Array.isArray(value);
    };
    IsObjectPipe = tslib_1.__decorate([
        Pipe({
            name: 'isObject'
        })
    ], IsObjectPipe);
    return IsObjectPipe;
}());
export { IsObjectPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtb2JqZWN0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2lzLW9iamVjdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRDtJQUFBO0lBTUEsQ0FBQztJQUpDLGdDQUFTLEdBQVQsVUFBVSxLQUFVLEVBQUUsSUFBVTtRQUM5QixPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUpVLFlBQVk7UUFIeEIsSUFBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLFVBQVU7U0FDakIsQ0FBQztPQUNXLFlBQVksQ0FNeEI7SUFBRCxtQkFBQztDQUFBLEFBTkQsSUFNQztTQU5ZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2lzT2JqZWN0J1xufSlcbmV4cG9ydCBjbGFzcyBJc09iamVjdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xuICB9XG5cbn1cbiJdfQ==
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var IsTextPipe = /** @class */ (function () {
    function IsTextPipe() {
    }
    IsTextPipe.prototype.transform = function (value, args) {
        return typeof value !== 'object' && !Array.isArray(value);
    };
    IsTextPipe = tslib_1.__decorate([
        Pipe({
            name: 'isText'
        })
    ], IsTextPipe);
    return IsTextPipe;
}());
export { IsTextPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtdGV4dC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9pcy10ZXh0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BEO0lBQUE7SUFNQSxDQUFDO0lBSkMsOEJBQVMsR0FBVCxVQUFVLEtBQVUsRUFBRSxJQUFVO1FBQzlCLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBSlUsVUFBVTtRQUh0QixJQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsUUFBUTtTQUNmLENBQUM7T0FDVyxVQUFVLENBTXRCO0lBQUQsaUJBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdpc1RleHQnXG59KVxuZXhwb3J0IGNsYXNzIElzVGV4dFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xuICB9XG5cbn1cbiJdfQ==
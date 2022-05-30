import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { stringIsNumber } from '../functions/string-is-number';
import { DecimalPipe } from '@angular/common';
let PhNumberPipe = class PhNumberPipe extends DecimalPipe {
    transform(value) {
        if (stringIsNumber(value)) {
            return super.transform(value);
        }
        return value || '';
    }
};
PhNumberPipe = tslib_1.__decorate([
    Pipe({ name: 'phNumber' })
], PhNumberPipe);
export { PhNumberPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGgtbnVtYmVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3BoLW51bWJlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzlDLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQWMsU0FBUSxXQUFXO0lBRTVDLFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLElBQUksY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQUUsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQUU7UUFDN0QsT0FBTyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7Q0FDRixDQUFBO0FBTlksWUFBWTtJQUR4QixJQUFJLENBQUMsRUFBRyxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7R0FDZCxZQUFZLENBTXhCO1NBTlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN0cmluZ0lzTnVtYmVyIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3N0cmluZy1pcy1udW1iZXInO1xuaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AUGlwZSh7ICBuYW1lOiAncGhOdW1iZXInfSlcbmV4cG9ydCBjbGFzcyBQaE51bWJlclBpcGUgIGV4dGVuZHMgRGVjaW1hbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHN0cmluZ0lzTnVtYmVyKHZhbHVlKSkgeyByZXR1cm4gc3VwZXIudHJhbnNmb3JtKHZhbHVlKTsgfVxuICAgIHJldHVybiB2YWx1ZSB8fCAnJztcbiAgfVxufVxuXG4gXG4iXX0=
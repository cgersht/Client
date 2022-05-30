import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsDatePipe } from './is-date.pipe';
import { PhNumberPipe } from './ph-number.pipe';
import { TimespanPipe } from './timespan.pipe';
import { IsArrayPipe } from './is-array.pipe';
import { TimeSpanPipe } from './time-span.pipe';
import { EnumToStringPipe } from './enum-to-string.pipe';
import { EnumLabelValueListPipe } from './enum-label-value-list.pipe';
import { IsTextPipe } from './is-text.pipe';
import { IsObjectPipe } from './is-object.pipe';
import { MyDatePipe } from './my-date.pipe';
import { MyDateTimePipe } from './my-date-time.pipe';
import { MyTimePipe } from './time.pipe';
let PipesModule = class PipesModule {
};
PipesModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            IsDatePipe,
            PhNumberPipe,
            MyDatePipe,
            TimespanPipe,
            MyDateTimePipe,
            MyTimePipe,
            IsArrayPipe,
            TimeSpanPipe,
            EnumToStringPipe,
            EnumLabelValueListPipe,
            IsTextPipe,
            IsObjectPipe
        ],
        imports: [
            CommonModule
        ],
        exports: [
            IsDatePipe,
            PhNumberPipe,
            MyDatePipe,
            TimespanPipe,
            MyDateTimePipe,
            MyTimePipe,
            IsArrayPipe,
            TimeSpanPipe,
            EnumToStringPipe,
            EnumLabelValueListPipe,
            IsTextPipe,
            IsObjectPipe
        ],
    })
], PipesModule);
export { PipesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9waXBlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFtQ3pDLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7Q0FBSSxDQUFBO0FBQWYsV0FBVztJQWpDdkIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osVUFBVTtZQUNWLFlBQVk7WUFDWixVQUFVO1lBQ1YsWUFBWTtZQUNaLGNBQWM7WUFDZCxVQUFVO1lBQ1YsV0FBVztZQUNYLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsc0JBQXNCO1lBQ3RCLFVBQVU7WUFDVixZQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUU7WUFDUCxZQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUU7WUFDUCxVQUFVO1lBQ1YsWUFBWTtZQUNaLFVBQVU7WUFDVixZQUFZO1lBQ1osY0FBYztZQUNkLFVBQVU7WUFDVixXQUFXO1lBQ1gsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixzQkFBc0I7WUFDdEIsVUFBVTtZQUNWLFlBQVk7U0FDYjtLQUNGLENBQUM7R0FDVyxXQUFXLENBQUk7U0FBZixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSXNEYXRlUGlwZSB9IGZyb20gJy4vaXMtZGF0ZS5waXBlJztcbmltcG9ydCB7IFBoTnVtYmVyUGlwZSB9IGZyb20gJy4vcGgtbnVtYmVyLnBpcGUnO1xuaW1wb3J0IHsgVGltZXNwYW5QaXBlIH0gZnJvbSAnLi90aW1lc3Bhbi5waXBlJztcbmltcG9ydCB7IElzQXJyYXlQaXBlIH0gZnJvbSAnLi9pcy1hcnJheS5waXBlJztcbmltcG9ydCB7IFRpbWVTcGFuUGlwZSB9IGZyb20gJy4vdGltZS1zcGFuLnBpcGUnO1xuaW1wb3J0IHsgRW51bVRvU3RyaW5nUGlwZSB9IGZyb20gJy4vZW51bS10by1zdHJpbmcucGlwZSc7XG5pbXBvcnQgeyBFbnVtTGFiZWxWYWx1ZUxpc3RQaXBlIH0gZnJvbSAnLi9lbnVtLWxhYmVsLXZhbHVlLWxpc3QucGlwZSc7XG5pbXBvcnQgeyBJc1RleHRQaXBlIH0gZnJvbSAnLi9pcy10ZXh0LnBpcGUnO1xuaW1wb3J0IHsgSXNPYmplY3RQaXBlIH0gZnJvbSAnLi9pcy1vYmplY3QucGlwZSc7XG5pbXBvcnQgeyBNeURhdGVQaXBlIH0gZnJvbSAnLi9teS1kYXRlLnBpcGUnO1xuaW1wb3J0IHsgTXlEYXRlVGltZVBpcGUgfSBmcm9tICcuL215LWRhdGUtdGltZS5waXBlJztcbmltcG9ydCB7IE15VGltZVBpcGUgfSBmcm9tICcuL3RpbWUucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIElzRGF0ZVBpcGUsXG4gICAgUGhOdW1iZXJQaXBlLFxuICAgIE15RGF0ZVBpcGUsXG4gICAgVGltZXNwYW5QaXBlLFxuICAgIE15RGF0ZVRpbWVQaXBlLFxuICAgIE15VGltZVBpcGUsXG4gICAgSXNBcnJheVBpcGUsXG4gICAgVGltZVNwYW5QaXBlLFxuICAgIEVudW1Ub1N0cmluZ1BpcGUsXG4gICAgRW51bUxhYmVsVmFsdWVMaXN0UGlwZSxcbiAgICBJc1RleHRQaXBlLFxuICAgIElzT2JqZWN0UGlwZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBJc0RhdGVQaXBlLFxuICAgIFBoTnVtYmVyUGlwZSxcbiAgICBNeURhdGVQaXBlLFxuICAgIFRpbWVzcGFuUGlwZSxcbiAgICBNeURhdGVUaW1lUGlwZSxcbiAgICBNeVRpbWVQaXBlLFxuICAgIElzQXJyYXlQaXBlLFxuICAgIFRpbWVTcGFuUGlwZSxcbiAgICBFbnVtVG9TdHJpbmdQaXBlLFxuICAgIEVudW1MYWJlbFZhbHVlTGlzdFBpcGUsXG4gICAgSXNUZXh0UGlwZSxcbiAgICBJc09iamVjdFBpcGVcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUGlwZXNNb2R1bGUgeyB9XG4iXX0=
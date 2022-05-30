import { __decorate, __metadata } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule, Pipe, InjectionToken } from '@angular/core';
import { DecimalPipe, DatePipe, CommonModule } from '@angular/common';
import { dateTimeFormats, dateFormats, timeFormats } from 'types';
import * as mom from 'moment';
import mom__default, {  } from 'moment';

let CoreService = class CoreService {
    constructor() { }
};
CoreService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CoreService_Factory() { return new CoreService(); }, token: CoreService, providedIn: "root" });
CoreService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], CoreService);

let CoreComponent = class CoreComponent {
    constructor() { }
    ngOnInit() {
    }
};
CoreComponent = __decorate([
    Component({
        selector: 'lib-core',
        template: `
    <p>
      core works!
    </p>
  `
    }),
    __metadata("design:paramtypes", [])
], CoreComponent);

let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    NgModule({
        declarations: [CoreComponent],
        imports: [],
        exports: [CoreComponent]
    })
], CoreModule);

const moment = mom__default;
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
IsDatePipe = __decorate([
    Pipe({ name: 'isDate' })
], IsDatePipe);

const stringIsNumber = (value) => {
    return !isNaN(+value);
};

let PhNumberPipe = class PhNumberPipe extends DecimalPipe {
    transform(value) {
        if (stringIsNumber(value)) {
            return super.transform(value);
        }
        return value || '';
    }
};
PhNumberPipe = __decorate([
    Pipe({ name: 'phNumber' })
], PhNumberPipe);

let TimespanPipe = class TimespanPipe {
    transform(value, args) {
        return null;
    }
};
TimespanPipe = __decorate([
    Pipe({
        name: 'timespan'
    })
], TimespanPipe);

let IsArrayPipe = class IsArrayPipe {
    transform(value, args) {
        return typeof value === 'object' && Array.isArray(value);
    }
};
IsArrayPipe = __decorate([
    Pipe({ name: 'isArray' })
], IsArrayPipe);

let TimeSpanPipe = class TimeSpanPipe {
    transform(value, format) {
        const numVal = parseInt(value, 10);
        if (!numVal && numVal !== 0) {
            return value;
        }
        const seconds = Math.floor((numVal / 1000) % 60);
        const minutes = Math.floor((numVal / (1000 * 60)) % 60);
        const hours = Math.floor((numVal / (1000 * 60 * 60)));
        const hoursText = hours < 10 ? '0' + hours : hours;
        const minutesText = minutes < 10 ? '0' + minutes : minutes;
        const secondsText = seconds < 10 ? '0' + seconds : seconds;
        if (format === timeFormats.HHmm) {
            return `${hoursText}:${minutesText}`;
        }
        else {
            return `${hoursText}:${minutesText}:${secondsText}`;
        }
    }
};
TimeSpanPipe = __decorate([
    Pipe({ name: 'timeSpan' })
], TimeSpanPipe);

const enumValueToString = (enumType, value) => {
    value = value || 0;
    if (!enumType[value]) {
        throw new Error(`enum value not exists:
         ${JSON.stringify(enumType)} with value:${value}}`);
    }
    return camelCaseToSplitString(enumType[value]);
};
const camelCaseRegex = /([a-z])([A-Z])/g;
const camelCaseToSplitString = (str) => {
    if (!str) {
        return str || '';
    }
    return str.toString().replace(camelCaseRegex, '$1 $2');
};

let EnumToStringPipe = class EnumToStringPipe {
    transform(value, ...args) {
        return enumValueToString(args[0], value);
    }
};
EnumToStringPipe = __decorate([
    Pipe({ name: 'enumToString' })
], EnumToStringPipe);

let EnumLabelValueListPipe = class EnumLabelValueListPipe {
    transform(enumVals, args) {
        return null; // enumToSelectItems(enumVals);
    }
};
EnumLabelValueListPipe = __decorate([
    Pipe({
        name: 'enumLabelValueList'
    })
], EnumLabelValueListPipe);

let IsTextPipe = class IsTextPipe {
    transform(value, args) {
        return typeof value !== 'object' && !Array.isArray(value);
    }
};
IsTextPipe = __decorate([
    Pipe({
        name: 'isText'
    })
], IsTextPipe);

let IsObjectPipe = class IsObjectPipe {
    transform(value, args) {
        return typeof value === 'object' && !Array.isArray(value);
    }
};
IsObjectPipe = __decorate([
    Pipe({
        name: 'isObject'
    })
], IsObjectPipe);

const stringIsDate = (value) => {
    if (!/[0-9]{1,2}[/.-][0-9]{1,2}[/.-][1-9][0-9]{1,3}/.test(value)
        && !/[1-9][0-9]{1,3}[/.-][0-9]{1,2}[/.-][0-9]{1,2}/.test(value)) {
        return false;
    }
    return !isNaN(Date.parse(value));
};

const moment$1 = mom;
let MyDatePipe = class MyDatePipe extends DatePipe {
    constructor() {
        super(...arguments);
        this.regexFormats = [
            /[0-9]{4}[-/][0-9]{2}[-/][0-9]{2}/,
            /[0-9]{2}[-/][0-9]{2}[-/][0-9]{4}/
        ];
    }
    dateIsValidByMoment(value) {
        return moment$1(value).isValid();
    }
    dateByMoment(value, format) {
        return moment$1(value).format(format);
    }
    transform(value, format) {
        if (!value) {
            return value;
        }
        if (this.dateIsValidByMoment(value)) {
            return this.dateByMoment(value, format);
        }
        if (this.regexFormats.some(re => re.test(value))) {
            return super.transform(value, format);
        }
        if (stringIsDate(value)) {
            const result = super.transform(super.transform(value, format), format);
            if (value.indexOf(result) >= 0) {
                return result;
            }
            return super.transform(value, format);
        }
        return value;
    }
};
MyDatePipe = __decorate([
    Pipe({ name: 'myDate' })
], MyDatePipe);

//const moment = moment_
let MyDateTimePipe = class MyDateTimePipe extends DatePipe {
    //const moment = moment_
    constructor() {
        super(...arguments);
        this.regexFormat = [
            /[0-9]{4}[-/][0-9]{2}[-/][0-9]{2}/,
            /[0-9]{2}[-/][0-9]{2}[-/][0-9]{4}/
        ];
    }
    dateIsValidByMoment(value) {
        return null; // moment(value).isValid();
    }
    dateByMoment(value, format) {
        return null; // moment(value).format(format);
    }
    transform(value, format) {
        if (!value) {
            return value;
        }
        if (this.dateIsValidByMoment(value)) {
            return this.dateByMoment(value, format);
        }
        if (this.regexFormat.some(reg => reg.test(value))) {
            return super.transform(value, format);
        }
        if (stringIsDate(value)) {
            const result = super.transform(super.transform(value, format), format);
            if (value.indexOf(result) >= 0) {
                return result;
            }
            return super.transform(value, format);
        }
        return value;
    }
};
MyDateTimePipe = __decorate([
    Pipe({ name: 'myDateTime' })
], MyDateTimePipe);

// const moment = moment_
let MyTimePipe = class MyTimePipe extends DatePipe {
    // const moment = moment_
    constructor() {
        super(...arguments);
        this.regexFormat = [
            /[0-9]{4}[-/][0-9]{2}[-/][0-9]{2}/,
            /[0-9]{2}[-/][0-9]{2}[-/][0-9]{4}/
        ];
    }
    dateIsValidByMoment(value) {
        return null; // moment(value).isValid();
    }
    dateByMoment(value, format) {
        return null; //moment(value).format(format);
    }
    transform(value, format) {
        if (!value) {
            return value;
        }
        if (this.dateIsValidByMoment(value)) {
            return this.dateByMoment(value, format);
        }
        if (this.regexFormat.some(reg => reg.test(value))) {
            return super.transform(value, format);
        }
        if (stringIsDate(value)) {
            const result = super.transform(super.transform(value, format), format);
            if (value.indexOf(result) >= 0) {
                return result;
            }
            return super.transform(value, format);
        }
        return value;
    }
};
MyTimePipe = __decorate([
    Pipe({ name: 'myTime' })
], MyTimePipe);

let PipesModule = class PipesModule {
};
PipesModule = __decorate([
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

let WebApiHttpInterceptor = class WebApiHttpInterceptor {
    intercept(req, next) {
        const a = req.clone({ url: `${window.location.origin}/${req.url}` });
        if ((/[^:]\/\//.test(req.url))) {
            req = req.clone({
                url: req.url.replace(/([^:])\/\//g, '$1/')
            });
        }
        if (!/http/.test(req.url) && !/^\./.test(req.url)) {
            req = req.clone({
                url: req.url.replace(/(api\/)+/gm, 'api/')
            });
        }
        return next.handle(req);
    }
};
WebApiHttpInterceptor = __decorate([
    Injectable()
], WebApiHttpInterceptor);

const EnvironmentTOKEN = new InjectionToken('environment');

;
// export const enumToSelectItems = (enumType: object): SelectItem => {
const enumToSelectItems = (enumType) => {
    return Object.entries(enumType).slice(0, Object.keys(enumType).length / 2)
        .map(([key, val]) => ({
        label: camelCaseToSplitString(val),
        value: key
    }))
        .map(item => (Object.assign({}, item, { value: isNaN(+item.value) ? item.value : +item.value }))) || [];
};

const fileNameFromfullPath = (fullPath) => {
    return fullPath && fullPath.replace(/^.*[\\\/]/, '') || '';
};

const formatNumAsMetricPrefix = (num) => {
    const ranges = [
        { divider: 1e18, suffix: 'P' },
        { divider: 1e15, suffix: 'E' },
        { divider: 1e12, suffix: 'T' },
        { divider: 1e9, suffix: 'G' },
        { divider: 1e6, suffix: 'M' },
        { divider: 1e3, suffix: 'K' },
    ];
    for (let i = 0; i < ranges.length; i++) {
        if (num >= ranges[i].divider) {
            return _formatNumString(num / ranges[i].divider) + ranges[i].suffix;
        }
    }
    return _formatNumString(num);
};
const _formatNumString = (num) => {
    return (Number(num.toFixed(2)) / 1).toString(); // 1 to remove trailing zeros
};

const jsonIsEmpty = (json) => {
    try {
        const obj = JSON.parse(json);
        return !(!!Object.keys(obj).length);
    }
    catch (_a) {
    }
    return false;
};

const sortDateTime = (date1, date2) => {
    return Date.parse(date1) - Date.parse(date2);
};

const stringIsJson = (json) => {
    try {
        const obj = JSON.parse(json);
        return !!obj && typeof (obj) === 'object';
    }
    catch (_a) {
    }
    return false;
};

const toPascalCaseRec = (obj) => {
    if (Array.isArray(obj)) {
        return obj.map(val => toPascalCaseRec(val));
    }
    return Object.entries(obj).reduce((state, [key, val]) => (Object.assign({}, state, { [toPascalCase(key)]: typeof (val) === 'object' ?
            toPascalCaseRec(val)
            : val })));
};
const toPascalCase = (str) => {
    if (typeof (str) !== 'string') {
        return str;
    }
    return str.split('').map((ch, idx) => idx === 0 ? ch.toUpperCase() : ch).join();
};

const tryParseJson = (json) => {
    try {
        return JSON.parse(json);
    }
    catch (_a) {
        return null;
    }
};

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CoreComponent, CoreModule, CoreService, EnvironmentTOKEN, PipesModule, WebApiHttpInterceptor, _formatNumString, camelCaseRegex, camelCaseToSplitString, enumToSelectItems, enumValueToString, fileNameFromfullPath, formatNumAsMetricPrefix, jsonIsEmpty, sortDateTime, stringIsDate, stringIsJson, stringIsNumber, toPascalCase, toPascalCaseRec, tryParseJson, IsDatePipe as ɵa, PhNumberPipe as ɵb, MyDatePipe as ɵc, TimespanPipe as ɵd, MyDateTimePipe as ɵe, MyTimePipe as ɵf, IsArrayPipe as ɵg, TimeSpanPipe as ɵh, EnumToStringPipe as ɵi, EnumLabelValueListPipe as ɵj, IsTextPipe as ɵk, IsObjectPipe as ɵl };
//# sourceMappingURL=core.js.map

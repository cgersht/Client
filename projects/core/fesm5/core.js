import { __decorate, __metadata, __read, __extends, __assign } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule, Pipe, InjectionToken } from '@angular/core';
import { DecimalPipe, DatePipe, CommonModule } from '@angular/common';
import { dateTimeFormats, dateFormats, timeFormats } from 'types';
import * as mom from 'moment';
import mom__default, {  } from 'moment';

var CoreService = /** @class */ (function () {
    function CoreService() {
    }
    CoreService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CoreService_Factory() { return new CoreService(); }, token: CoreService, providedIn: "root" });
    CoreService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CoreService);
    return CoreService;
}());

var CoreComponent = /** @class */ (function () {
    function CoreComponent() {
    }
    CoreComponent.prototype.ngOnInit = function () {
    };
    CoreComponent = __decorate([
        Component({
            selector: 'lib-core',
            template: "\n    <p>\n      core works!\n    </p>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], CoreComponent);
    return CoreComponent;
}());

var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        NgModule({
            declarations: [CoreComponent],
            imports: [],
            exports: [CoreComponent]
        })
    ], CoreModule);
    return CoreModule;
}());

var moment = mom__default;
var IsDatePipe = /** @class */ (function () {
    function IsDatePipe() {
    }
    IsDatePipe.prototype.transform = function (value, args) {
        // if (!isNaN(+value)) { return null; }
        var dateTimePatterns = Object.entries(dateTimeFormats).map(function (_a) {
            var _b = __read(_a, 2), key = _b[0], val = _b[1];
            return val;
        }) || [];
        var datePatterns = Object.entries(dateFormats).map(function (_a) {
            var _b = __read(_a, 2), key = _b[0], val = _b[1];
            return val;
        }) || [];
        var timePatterns = Object.entries(timeFormats).map(function (_a) {
            var _b = __read(_a, 2), key = _b[0], val = _b[1];
            return val;
        }) || [];
        // const patterns = [...dateTimePatterns, ...datePatterns, ...timePatterns, moment.ISO_8601];
        // for (const pattern of patterns) {
        //   const m = value && /UTC/i.test(value) ? moment(new Date(value), pattern, true) : moment(value, pattern, true);
        //   if (m.isValid()) {
        //     const date = m.toDate();
        //     return date.getFullYear() > 1970 ? date : null;
        //   }
        // }
        return null;
    };
    IsDatePipe = __decorate([
        Pipe({ name: 'isDate' })
    ], IsDatePipe);
    return IsDatePipe;
}());

var stringIsNumber = function (value) {
    return !isNaN(+value);
};

var PhNumberPipe = /** @class */ (function (_super) {
    __extends(PhNumberPipe, _super);
    function PhNumberPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhNumberPipe.prototype.transform = function (value) {
        if (stringIsNumber(value)) {
            return _super.prototype.transform.call(this, value);
        }
        return value || '';
    };
    PhNumberPipe = __decorate([
        Pipe({ name: 'phNumber' })
    ], PhNumberPipe);
    return PhNumberPipe;
}(DecimalPipe));

var TimespanPipe = /** @class */ (function () {
    function TimespanPipe() {
    }
    TimespanPipe.prototype.transform = function (value, args) {
        return null;
    };
    TimespanPipe = __decorate([
        Pipe({
            name: 'timespan'
        })
    ], TimespanPipe);
    return TimespanPipe;
}());

var IsArrayPipe = /** @class */ (function () {
    function IsArrayPipe() {
    }
    IsArrayPipe.prototype.transform = function (value, args) {
        return typeof value === 'object' && Array.isArray(value);
    };
    IsArrayPipe = __decorate([
        Pipe({ name: 'isArray' })
    ], IsArrayPipe);
    return IsArrayPipe;
}());

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
    TimeSpanPipe = __decorate([
        Pipe({ name: 'timeSpan' })
    ], TimeSpanPipe);
    return TimeSpanPipe;
}());

var enumValueToString = function (enumType, value) {
    value = value || 0;
    if (!enumType[value]) {
        throw new Error("enum value not exists:\n         " + JSON.stringify(enumType) + " with value:" + value + "}");
    }
    return camelCaseToSplitString(enumType[value]);
};
var camelCaseRegex = /([a-z])([A-Z])/g;
var camelCaseToSplitString = function (str) {
    if (!str) {
        return str || '';
    }
    return str.toString().replace(camelCaseRegex, '$1 $2');
};

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
    EnumToStringPipe = __decorate([
        Pipe({ name: 'enumToString' })
    ], EnumToStringPipe);
    return EnumToStringPipe;
}());

var EnumLabelValueListPipe = /** @class */ (function () {
    function EnumLabelValueListPipe() {
    }
    EnumLabelValueListPipe.prototype.transform = function (enumVals, args) {
        return null; // enumToSelectItems(enumVals);
    };
    EnumLabelValueListPipe = __decorate([
        Pipe({
            name: 'enumLabelValueList'
        })
    ], EnumLabelValueListPipe);
    return EnumLabelValueListPipe;
}());

var IsTextPipe = /** @class */ (function () {
    function IsTextPipe() {
    }
    IsTextPipe.prototype.transform = function (value, args) {
        return typeof value !== 'object' && !Array.isArray(value);
    };
    IsTextPipe = __decorate([
        Pipe({
            name: 'isText'
        })
    ], IsTextPipe);
    return IsTextPipe;
}());

var IsObjectPipe = /** @class */ (function () {
    function IsObjectPipe() {
    }
    IsObjectPipe.prototype.transform = function (value, args) {
        return typeof value === 'object' && !Array.isArray(value);
    };
    IsObjectPipe = __decorate([
        Pipe({
            name: 'isObject'
        })
    ], IsObjectPipe);
    return IsObjectPipe;
}());

var stringIsDate = function (value) {
    if (!/[0-9]{1,2}[/.-][0-9]{1,2}[/.-][1-9][0-9]{1,3}/.test(value)
        && !/[1-9][0-9]{1,3}[/.-][0-9]{1,2}[/.-][0-9]{1,2}/.test(value)) {
        return false;
    }
    return !isNaN(Date.parse(value));
};

var moment$1 = mom;
var MyDatePipe = /** @class */ (function (_super) {
    __extends(MyDatePipe, _super);
    function MyDatePipe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.regexFormats = [
            /[0-9]{4}[-/][0-9]{2}[-/][0-9]{2}/,
            /[0-9]{2}[-/][0-9]{2}[-/][0-9]{4}/
        ];
        return _this;
    }
    MyDatePipe.prototype.dateIsValidByMoment = function (value) {
        return moment$1(value).isValid();
    };
    MyDatePipe.prototype.dateByMoment = function (value, format) {
        return moment$1(value).format(format);
    };
    MyDatePipe.prototype.transform = function (value, format) {
        if (!value) {
            return value;
        }
        if (this.dateIsValidByMoment(value)) {
            return this.dateByMoment(value, format);
        }
        if (this.regexFormats.some(function (re) { return re.test(value); })) {
            return _super.prototype.transform.call(this, value, format);
        }
        if (stringIsDate(value)) {
            var result = _super.prototype.transform.call(this, _super.prototype.transform.call(this, value, format), format);
            if (value.indexOf(result) >= 0) {
                return result;
            }
            return _super.prototype.transform.call(this, value, format);
        }
        return value;
    };
    MyDatePipe = __decorate([
        Pipe({ name: 'myDate' })
    ], MyDatePipe);
    return MyDatePipe;
}(DatePipe));

//const moment = moment_
var MyDateTimePipe = /** @class */ (function (_super) {
    __extends(MyDateTimePipe, _super);
    function MyDateTimePipe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.regexFormat = [
            /[0-9]{4}[-/][0-9]{2}[-/][0-9]{2}/,
            /[0-9]{2}[-/][0-9]{2}[-/][0-9]{4}/
        ];
        return _this;
    }
    MyDateTimePipe.prototype.dateIsValidByMoment = function (value) {
        return null; // moment(value).isValid();
    };
    MyDateTimePipe.prototype.dateByMoment = function (value, format) {
        return null; // moment(value).format(format);
    };
    MyDateTimePipe.prototype.transform = function (value, format) {
        if (!value) {
            return value;
        }
        if (this.dateIsValidByMoment(value)) {
            return this.dateByMoment(value, format);
        }
        if (this.regexFormat.some(function (reg) { return reg.test(value); })) {
            return _super.prototype.transform.call(this, value, format);
        }
        if (stringIsDate(value)) {
            var result = _super.prototype.transform.call(this, _super.prototype.transform.call(this, value, format), format);
            if (value.indexOf(result) >= 0) {
                return result;
            }
            return _super.prototype.transform.call(this, value, format);
        }
        return value;
    };
    MyDateTimePipe = __decorate([
        Pipe({ name: 'myDateTime' })
    ], MyDateTimePipe);
    return MyDateTimePipe;
}(DatePipe));

// const moment = moment_
var MyTimePipe = /** @class */ (function (_super) {
    __extends(MyTimePipe, _super);
    function MyTimePipe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.regexFormat = [
            /[0-9]{4}[-/][0-9]{2}[-/][0-9]{2}/,
            /[0-9]{2}[-/][0-9]{2}[-/][0-9]{4}/
        ];
        return _this;
    }
    MyTimePipe.prototype.dateIsValidByMoment = function (value) {
        return null; // moment(value).isValid();
    };
    MyTimePipe.prototype.dateByMoment = function (value, format) {
        return null; //moment(value).format(format);
    };
    MyTimePipe.prototype.transform = function (value, format) {
        if (!value) {
            return value;
        }
        if (this.dateIsValidByMoment(value)) {
            return this.dateByMoment(value, format);
        }
        if (this.regexFormat.some(function (reg) { return reg.test(value); })) {
            return _super.prototype.transform.call(this, value, format);
        }
        if (stringIsDate(value)) {
            var result = _super.prototype.transform.call(this, _super.prototype.transform.call(this, value, format), format);
            if (value.indexOf(result) >= 0) {
                return result;
            }
            return _super.prototype.transform.call(this, value, format);
        }
        return value;
    };
    MyTimePipe = __decorate([
        Pipe({ name: 'myTime' })
    ], MyTimePipe);
    return MyTimePipe;
}(DatePipe));

var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
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
    return PipesModule;
}());

var WebApiHttpInterceptor = /** @class */ (function () {
    function WebApiHttpInterceptor() {
    }
    WebApiHttpInterceptor.prototype.intercept = function (req, next) {
        var a = req.clone({ url: window.location.origin + "/" + req.url });
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
    };
    WebApiHttpInterceptor = __decorate([
        Injectable()
    ], WebApiHttpInterceptor);
    return WebApiHttpInterceptor;
}());

var EnvironmentTOKEN = new InjectionToken('environment');

;
// export const enumToSelectItems = (enumType: object): SelectItem => {
var enumToSelectItems = function (enumType) {
    return Object.entries(enumType).slice(0, Object.keys(enumType).length / 2)
        .map(function (_a) {
        var _b = __read(_a, 2), key = _b[0], val = _b[1];
        return ({
            label: camelCaseToSplitString(val),
            value: key
        });
    })
        .map(function (item) { return (__assign({}, item, { value: isNaN(+item.value) ? item.value : +item.value })); }) || [];
};

var fileNameFromfullPath = function (fullPath) {
    return fullPath && fullPath.replace(/^.*[\\\/]/, '') || '';
};

var formatNumAsMetricPrefix = function (num) {
    var ranges = [
        { divider: 1e18, suffix: 'P' },
        { divider: 1e15, suffix: 'E' },
        { divider: 1e12, suffix: 'T' },
        { divider: 1e9, suffix: 'G' },
        { divider: 1e6, suffix: 'M' },
        { divider: 1e3, suffix: 'K' },
    ];
    for (var i = 0; i < ranges.length; i++) {
        if (num >= ranges[i].divider) {
            return _formatNumString(num / ranges[i].divider) + ranges[i].suffix;
        }
    }
    return _formatNumString(num);
};
var _formatNumString = function (num) {
    return (Number(num.toFixed(2)) / 1).toString(); // 1 to remove trailing zeros
};

var jsonIsEmpty = function (json) {
    try {
        var obj = JSON.parse(json);
        return !(!!Object.keys(obj).length);
    }
    catch (_a) {
    }
    return false;
};

var sortDateTime = function (date1, date2) {
    return Date.parse(date1) - Date.parse(date2);
};

var stringIsJson = function (json) {
    try {
        var obj = JSON.parse(json);
        return !!obj && typeof (obj) === 'object';
    }
    catch (_a) {
    }
    return false;
};

var toPascalCaseRec = function (obj) {
    if (Array.isArray(obj)) {
        return obj.map(function (val) { return toPascalCaseRec(val); });
    }
    return Object.entries(obj).reduce(function (state, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], val = _c[1];
        return (__assign({}, state, (_b = {}, _b[toPascalCase(key)] = typeof (val) === 'object' ?
            toPascalCaseRec(val)
            : val, _b)));
    });
};
var toPascalCase = function (str) {
    if (typeof (str) !== 'string') {
        return str;
    }
    return str.split('').map(function (ch, idx) { return idx === 0 ? ch.toUpperCase() : ch; }).join();
};

var tryParseJson = function (json) {
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

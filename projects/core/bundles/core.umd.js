(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('types'), require('moment')) :
    typeof define === 'function' && define.amd ? define('core', ['exports', '@angular/core', '@angular/common', 'types', 'moment'], factory) :
    (global = global || self, factory(global.core = {}, global.ng.core, global.ng.common, global.types, global.moment));
}(this, (function (exports, core, common, types, mom__default) { 'use strict';

    var mom__default__default = 'default' in mom__default ? mom__default['default'] : mom__default;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var CoreService = /** @class */ (function () {
        function CoreService() {
        }
        CoreService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CoreService_Factory() { return new CoreService(); }, token: CoreService, providedIn: "root" });
        CoreService = __decorate([
            core.Injectable({
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
            core.Component({
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
            core.NgModule({
                declarations: [CoreComponent],
                imports: [],
                exports: [CoreComponent]
            })
        ], CoreModule);
        return CoreModule;
    }());

    var moment = mom__default__default;
    var IsDatePipe = /** @class */ (function () {
        function IsDatePipe() {
        }
        IsDatePipe.prototype.transform = function (value, args) {
            // if (!isNaN(+value)) { return null; }
            var dateTimePatterns = Object.entries(types.dateTimeFormats).map(function (_a) {
                var _b = __read(_a, 2), key = _b[0], val = _b[1];
                return val;
            }) || [];
            var datePatterns = Object.entries(types.dateFormats).map(function (_a) {
                var _b = __read(_a, 2), key = _b[0], val = _b[1];
                return val;
            }) || [];
            var timePatterns = Object.entries(types.timeFormats).map(function (_a) {
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
            core.Pipe({ name: 'isDate' })
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
            core.Pipe({ name: 'phNumber' })
        ], PhNumberPipe);
        return PhNumberPipe;
    }(common.DecimalPipe));

    var TimespanPipe = /** @class */ (function () {
        function TimespanPipe() {
        }
        TimespanPipe.prototype.transform = function (value, args) {
            return null;
        };
        TimespanPipe = __decorate([
            core.Pipe({
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
            core.Pipe({ name: 'isArray' })
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
            if (format === types.timeFormats.HHmm) {
                return hoursText + ":" + minutesText;
            }
            else {
                return hoursText + ":" + minutesText + ":" + secondsText;
            }
        };
        TimeSpanPipe = __decorate([
            core.Pipe({ name: 'timeSpan' })
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
            core.Pipe({ name: 'enumToString' })
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
            core.Pipe({
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
            core.Pipe({
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
            core.Pipe({
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

    var moment$1 = mom__default;
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
            core.Pipe({ name: 'myDate' })
        ], MyDatePipe);
        return MyDatePipe;
    }(common.DatePipe));

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
            core.Pipe({ name: 'myDateTime' })
        ], MyDateTimePipe);
        return MyDateTimePipe;
    }(common.DatePipe));

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
            core.Pipe({ name: 'myTime' })
        ], MyTimePipe);
        return MyTimePipe;
    }(common.DatePipe));

    var PipesModule = /** @class */ (function () {
        function PipesModule() {
        }
        PipesModule = __decorate([
            core.NgModule({
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
                    common.CommonModule
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
            core.Injectable()
        ], WebApiHttpInterceptor);
        return WebApiHttpInterceptor;
    }());

    var EnvironmentTOKEN = new core.InjectionToken('environment');

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

    exports.CoreComponent = CoreComponent;
    exports.CoreModule = CoreModule;
    exports.CoreService = CoreService;
    exports.EnvironmentTOKEN = EnvironmentTOKEN;
    exports.PipesModule = PipesModule;
    exports.WebApiHttpInterceptor = WebApiHttpInterceptor;
    exports._formatNumString = _formatNumString;
    exports.camelCaseRegex = camelCaseRegex;
    exports.camelCaseToSplitString = camelCaseToSplitString;
    exports.enumToSelectItems = enumToSelectItems;
    exports.enumValueToString = enumValueToString;
    exports.fileNameFromfullPath = fileNameFromfullPath;
    exports.formatNumAsMetricPrefix = formatNumAsMetricPrefix;
    exports.jsonIsEmpty = jsonIsEmpty;
    exports.sortDateTime = sortDateTime;
    exports.stringIsDate = stringIsDate;
    exports.stringIsJson = stringIsJson;
    exports.stringIsNumber = stringIsNumber;
    exports.toPascalCase = toPascalCase;
    exports.toPascalCaseRec = toPascalCaseRec;
    exports.tryParseJson = tryParseJson;
    exports.ɵa = IsDatePipe;
    exports.ɵb = PhNumberPipe;
    exports.ɵc = MyDatePipe;
    exports.ɵd = TimespanPipe;
    exports.ɵe = MyDateTimePipe;
    exports.ɵf = MyTimePipe;
    exports.ɵg = IsArrayPipe;
    exports.ɵh = TimeSpanPipe;
    exports.ɵi = EnumToStringPipe;
    exports.ɵj = EnumLabelValueListPipe;
    exports.ɵk = IsTextPipe;
    exports.ɵl = IsObjectPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=core.umd.js.map

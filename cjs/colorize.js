"use strict";
exports.__esModule = true;
exports.colorize = exports.coloring = void 0;
var assertion_lib_1 = require("@santi100/assertion-lib");
var core_1 = require("./core");
var warn = typeof console === 'undefined' ? function () { return void 0; } : console.warn;
var log = typeof console === 'undefined' ? function () { return void 0; } : console.log;
var warnOrLog = warn !== null && warn !== void 0 ? warn : log;
function __keys(o) {
    if (Object === null || Object === void 0 ? void 0 : Object.keys)
        return Object.keys(o);
    else {
        var keys = [];
        for (var key in o) {
            keys.push(key);
        }
        return keys;
    }
}
/**
 * Color `str` with color(s) `color`.
 *
 * @param str The string to paint in color!
 * @param color The color(s) to paint the string in.
 */
function colorize(str, color) {
    (0, assertion_lib_1.assertTypeOf)(str, 'string', 'str');
    if (!(color instanceof Array)) {
        (0, assertion_lib_1.assertTypeOf)(color, 'string', 'color');
        (0, assertion_lib_1.assertOneOf)(color, 'color', __keys(core_1.COLORS_AND_EFFECTS));
    }
    function generateFromArray(color) {
        var j = '';
        for (var _i = 0, color_1 = color; _i < color_1.length; _i++) {
            var item = color_1[_i];
            j += core_1.COLORS_AND_EFFECTS[item];
        }
        j += "".concat(str, "\u001B[0m");
        return j;
    }
    return typeof color === 'string'
        ? "".concat(core_1.COLORS_AND_EFFECTS[color]).concat(str, "\u001B[0m")
        : generateFromArray(color);
}
exports["default"] = colorize;
exports.colorize = colorize;
/**
 * @deprecated This is a deprecated alias for the main `colorize` function. Use {@link colorize} instead.
 */
function coloring() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    warnOrLog('coloring() is deprecated. Use colorize() instead.');
    return typeof args[1] !== 'string'
        ? colorize(args[0], args[1])
        : colorize(args[0], args[1]);
}
exports.coloring = coloring;

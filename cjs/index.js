"use strict";
exports.__esModule = true;
exports.Coloring = exports.Colorizer = exports.rainbowify = exports.coloring = void 0;
var assertion_lib_1 = require("@santi100/assertion-lib");
var COLORS = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    bold: '\x1b[1m',
    blink: '\x1b[5m',
    conceal: '\x1b[8m'
};
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
function coloring(str, color) {
    (0, assertion_lib_1.assertTypeOf)(str, 'string', 'str');
    (0, assertion_lib_1.assertTypeOf)(color, 'string', 'color');
    (0, assertion_lib_1.assertOneOf)(color, 'color', __keys(COLORS));
    function generateFromArray(color) {
        var j = '';
        for (var _i = 0, color_1 = color; _i < color_1.length; _i++) {
            var item = color_1[_i];
            j += COLORS[item];
        }
        j += "".concat(str, "\u001B[0m");
        return j;
    }
    return typeof color === 'string'
        ? "".concat(COLORS[color]).concat(str, "\u001B[0m")
        : generateFromArray(color);
}
exports.coloring = coloring;
/**
 * Colors `text` in a rainbow pattern.
 *
 * @param str The string to paint in color!
 * @returns The colored string.
 */
function rainbowify(str) {
    (0, assertion_lib_1.assertTypeOf)(str, 'string', 'text');
    var colors = [
        COLORS.red,
        COLORS.yellow,
        COLORS.green,
        COLORS.cyan,
        COLORS.blue,
        COLORS.magenta
    ]; // red, orange, yellow, green, blue, magenta
    var letters = ''.concat(str).split('');
    var coloredText = '';
    var colorIndex = 0;
    for (var _i = 0, letters_1 = letters; _i < letters_1.length; _i++) {
        var element = letters_1[_i];
        var letter = element;
        var color = colors[colorIndex];
        coloredText += "".concat(color).concat(letter, "\u001B[0m");
        colorIndex = (colorIndex + 1) % colors.length;
    }
    return coloredText;
}
exports.rainbowify = rainbowify;
/**
 * @class This is a colorizer class.
 */
var Colorizer = /** @class */ (function () {
    function Colorizer() {
        var _a;
        this.__string = '';
        (_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, this, '__string', {
            enumerable: false
        });
    }
    /**
     * Paints `text` in black.
     *
     * @param text The text to paint in black.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.black = function (text) {
        this.__string = "".concat(this.__string).concat(COLORS.black).concat(text);
        return this;
    };
    /**
     * Paints `text` in red.
     *
     * @param text The text to paint in red.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.red = function (text) {
        this.__string = "".concat(this.__string).concat(COLORS.red).concat(text);
        return this;
    };
    /**
     * Paints `text` in green.
     *
     * @param text The text to paint in green.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.green = function (text) {
        this.__string = "".concat(this.__string).concat(COLORS.green).concat(text);
        return this;
    };
    /**
     * Paints `text` in yellow.
     *
     * @param text The text to paint in yellow.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.yellow = function (text) {
        this.__string = "".concat(this.__string).concat(COLORS.yellow).concat(text);
        return this;
    };
    /**
     * Paints `text` in blue.
     *
     * @param text The text to paint in blue.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.blue = function (text) {
        this.__string = "".concat(this.__string).concat(COLORS.blue).concat(text);
        return this;
    };
    /**
     * Paints `text` in magenta.
     *
     * @param text The text to paint in magenta.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.magenta = function (text) {
        this.__string = "".concat(this.__string).concat(COLORS.magenta).concat(text);
        return this;
    };
    /**
     * Paints `text` in cyan.
     *
     * @param text The text to paint in cyan.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.cyan = function (text) {
        this.__string = "".concat(this.__string).concat(COLORS.cyan).concat(text);
        return this;
    };
    /**
     * Paints `text` in white.
     *
     * @param text The text to paint in white.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.white = function (text) {
        this.__string = "".concat(this.__string).concat(COLORS.white).concat(text);
        return this;
    };
    /**
     * Makes `text` **bold**.
     *
     * @param text The text to make **bold**.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.bold = function (text) {
        this.__string = "".concat(this.__string).concat(COLORS.bold).concat(text);
        return this;
    };
    /**
     * Makes `text` blink.
     *
     * @param text The text to make blink.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.blink = function (text) {
        this.__string = "".concat(this.__string).concat(COLORS.blink).concat(text);
        return this;
    };
    /**
     * Conceals `text`.
     *
     * @param text The text to conceal.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.conceal = function (text) {
        this.__string = "".concat(this.__string).concat(COLORS.conceal).concat(text);
        return this;
    };
    /**
     * Turns this object into the final string.
     *
     * @returns The string with all colors in this object.
     */
    Colorizer.prototype.toString = function () {
        return "".concat(this.__string, "\u001B[0m");
    };
    /**
     * Resolves the object to the final string.
     * @deprecated Use {@link Colorizer.prototype.toString} instead.
     */
    Colorizer.prototype.resolve = function () {
        ((typeof console === 'undefined' ? function () { } : console.warn) ||
            (typeof console === 'undefined' ? function () { } : console.log))('Coloring.prototype.resolve() is deprecated. Use Coloring.prototype.toString() instead.');
        return this.toString();
    };
    return Colorizer;
}());
exports.Colorizer = Colorizer;
/**
 * @deprecated This is a deprecated alias for the `Colorizer` class. Use {@link Colorizer} instead.
 */
exports.Coloring = Colorizer;

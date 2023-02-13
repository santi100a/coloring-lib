"use strict";
exports.__esModule = true;
exports.Coloring = exports.coloring = void 0;
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
/**
 * Color `string` with color(s) `color`.
 *
 * @param string The string to paint in color!
 * @param color The colors to paint the string in.
 */
function coloring(str, color) {
    var isColorValid = Array.isArray(color) || color in COLORS;
    (0, assertion_lib_1.assertType)(str, 'string');
    (0, assertion_lib_1.assert)(isColorValid);
    function generateFromArray(color) {
        var j = '';
        for (var _i = 0, color_1 = color; _i < color_1.length; _i++) {
            var item = color_1[_i];
            j += COLORS[item];
        }
        j += "{str}\u001B[0m";
        return j;
    }
    return typeof color === 'string'
        ? "".concat(COLORS[color]).concat(str, "\u001B[0m")
        : generateFromArray(color);
}
exports.coloring = coloring;
/**
 * @class This is a coloring class.
 */
var Coloring = /** @class */ (function () {
    function Coloring() {
        this._colors = '';
    }
    /**
     * Paints `text` in black.
     *
     * @param text The text to paint in black.
     * @returns `this` object for chaining.
     */
    Coloring.prototype.black = function (text) {
        this._colors = "".concat(this._colors).concat(COLORS.black).concat(text);
        return this;
    };
    /**
     * Paints `text` in red.
     *
     * @param text The text to paint in red.
     * @returns `this` object for chaining.
     */
    Coloring.prototype.red = function (text) {
        this._colors = "".concat(this._colors).concat(COLORS.red).concat(text);
        return this;
    };
    /**
     * Paints `text` in green.
     *
     * @param text The text to paint in green.
     * @returns `this` object for chaining.
     */
    Coloring.prototype.green = function (text) {
        this._colors = "".concat(this._colors).concat(COLORS.green).concat(text);
        return this;
    };
    /**
     * Paints `text` in yellow.
     *
     * @param text The text to paint in yellow.
     * @returns `this` object for chaining.
     */
    Coloring.prototype.yellow = function (text) {
        this._colors = "".concat(this._colors).concat(COLORS.yellow).concat(text);
        return this;
    };
    /**
     * Paints `text` in blue.
     *
     * @param text The text to paint in blue.
     * @returns `this` object for chaining.
     */
    Coloring.prototype.blue = function (text) {
        this._colors = "".concat(this._colors).concat(COLORS.blue).concat(text);
        return this;
    };
    /**
     * Paints `text` in magenta.
     *
     * @param text The text to paint in magenta.
     * @returns `this` object for chaining.
     */
    Coloring.prototype.magenta = function (text) {
        this._colors = "".concat(this._colors).concat(COLORS.magenta).concat(text);
        return this;
    };
    /**
     * Paints `text` in cyan.
     *
     * @param text The text to paint in cyan.
     * @returns `this` object for chaining.
     */
    Coloring.prototype.cyan = function (text) {
        this._colors = "".concat(this._colors).concat(COLORS.cyan).concat(text);
        return this;
    };
    /**
     * Paints `text` in white.
     *
     * @param text The text to paint in white.
     * @returns `this` object for chaining.
     */
    Coloring.prototype.white = function (text) {
        this._colors = "".concat(this._colors).concat(COLORS.white).concat(text);
        return this;
    };
    /**
     * Makes `text` **bold**.
     *
     * @param text The text to make **bold**.
     * @returns `this` object for chaining.
     */
    Coloring.prototype.bold = function (text) {
        this._colors = "".concat(this._colors).concat(COLORS.bold).concat(text);
        return this;
    };
    /**
     * Makes `text` blink.
     *
     * @param text The text to make blink.
     * @returns `this` object for chaining.
     */
    Coloring.prototype.blink = function (text) {
        this._colors = "".concat(this._colors).concat(COLORS.blink).concat(text);
        return this;
    };
    /**
     * Conceals `text`.
     *
     * @param text The text to conceal.
     * @returns `this` object for chaining.
     */
    Coloring.prototype.conceal = function (text) {
        this._colors = "".concat(this._colors).concat(COLORS.conceal).concat(text);
        return this;
    };
    /**
     * Turns this object into the final string.
     *
     * @returns The string with all colors in this object.
     */
    Coloring.prototype.toString = function () {
        return "".concat(this._colors, "\u001B[0m");
    };
    /**
     * Resolves the object to the final string.
     * @deprecated Use {@link Coloring.prototype.toString} instead.
     */
    Coloring.prototype.resolve = function () {
        console.warn('Coloring.prototype.resolve() is deprecated. Use Coloring.prototype.toString() instead.');
        return this.toString();
    };
    return Coloring;
}());
exports.Coloring = Coloring;

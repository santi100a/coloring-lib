"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Coloring = exports.Colorizer = void 0;
var assertion_lib_1 = require("@santi100/assertion-lib");
var core_1 = require("./core");
var warn = typeof console === 'undefined' ? function () { return void 0; } : console.warn;
var log = typeof console === 'undefined' ? function () { return void 0; } : console.log;
var warnOrLog = warn !== null && warn !== void 0 ? warn : log;
/**
 * @class This is a colorizer class.
 */
var Colorizer = /** @class */ (function () {
    function Colorizer(initialString) {
        var _a;
        this.__string = '';
        if (initialString !== void 0)
            (0, assertion_lib_1.assertTypeOf)(initialString, 'string', 'initialString');
        (_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, this, '__string', {
            enumerable: false
        });
        this.__string = initialString !== null && initialString !== void 0 ? initialString : this.__string;
    }
    /**
     * Creates a new colorizer exactly like the current one.
     *
     * @returns A copy of this colorizer.
     */
    Colorizer.prototype.copy = function () {
        return new Colorizer(this.__string);
    };
    /**
     * Paints `text` in black.
     *
     * @param text The text to paint in black.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.black = function (text) {
        this.__string += "".concat(core_1.COLORS.black).concat(text);
        return this;
    };
    /**
     * Paints `text` in red.
     *
     * @param text The text to paint in red.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.red = function (text) {
        this.__string += "".concat(core_1.COLORS.red).concat(text);
        return this;
    };
    /**
     * Paints `text` in green.
     *
     * @param text The text to paint in green.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.green = function (text) {
        this.__string += "".concat(core_1.COLORS.green).concat(text);
        return this;
    };
    /**
     * *Italicizes* `text`.

     * @param text The text to be `italicized`.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.italic = function (text) {
        this.__string += "".concat(core_1.EFFECTS.italic).concat(text);
    };
    /**
     * Paints `text` in yellow.
     *
     * @param text The text to paint in yellow.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.yellow = function (text) {
        this.__string += "".concat(core_1.COLORS.yellow).concat(text);
        return this;
    };
    /**
     * Paints `text` in blue.
     *
     * @param text The text to paint in blue.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.blue = function (text) {
        this.__string += "".concat(core_1.COLORS.blue).concat(text);
        return this;
    };
    /**
     * Paints `text` in magenta.
     *
     * @param text The text to paint in magenta.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.magenta = function (text) {
        this.__string += "".concat(core_1.COLORS.magenta).concat(text);
        return this;
    };
    /**
     * Paints `text` in cyan.
     *
     * @param text The text to paint in cyan.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.cyan = function (text) {
        this.__string += "".concat(core_1.COLORS.cyan).concat(text);
        return this;
    };
    /**
     * Paints `text` in white.
     *
     * @param text The text to paint in white.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.white = function (text) {
        this.__string += "".concat(core_1.COLORS.white).concat(text);
        return this;
    };
    /**
     * Makes `text` **bold**.
     *
     * @param text The text to make **bold**.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.bold = function (text) {
        this.__string += "".concat(core_1.EFFECTS.bold).concat(text);
        return this;
    };
    /**
     * Makes `text` blink.
     *
     * @param text The text to make blink.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.blink = function (text) {
        this.__string += "".concat(core_1.EFFECTS.blink).concat(text);
        return this;
    };
    /**
     * Conceals `text`.
     *
     * @param text The text to conceal.
     * @returns `this` object for chaining.
     */
    Colorizer.prototype.conceal = function (text) {
        this.__string += "".concat(core_1.EFFECTS.conceal).concat(text);
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
        warnOrLog('Colorizer.prototype.resolve() is deprecated. Use Colorizer.prototype.toString() instead.');
        return this.toString();
    };
    return Colorizer;
}());
exports.Colorizer = Colorizer;
/**
 * @deprecated This is a deprecated alias for the `Colorizer` class. Use {@link Colorizer} instead.
 */
var Coloring = /** @class */ (function (_super) {
    __extends(Coloring, _super);
    function Coloring() {
        warnOrLog();
        return _super.call(this) || this;
    }
    return Coloring;
}(Colorizer));
exports.Coloring = Coloring;

"use strict";
exports.__esModule = true;
exports.rainbowify = void 0;
var assertion_lib_1 = require("@santi100/assertion-lib");
var core_1 = require("./core");
/**
 * Colors `text` in a rainbow pattern.
 *
 * @param str The string to paint in color!
 * @returns The colored string.
 */
function rainbowify(str) {
    (0, assertion_lib_1.assertTypeOf)(str, 'string', 'text');
    var colors = [
        core_1.COLORS.red,
        core_1.COLORS.yellow,
        core_1.COLORS.green,
        core_1.COLORS.cyan,
        core_1.COLORS.blue,
        core_1.COLORS.magenta,
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

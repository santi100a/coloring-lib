"use strict";
exports.__esModule = true;
exports.colorizeTemplate = void 0;
var assertion_lib_1 = require("@santi100/assertion-lib");
var core_1 = require("./core");
/**
 * Fills `str`, given that it is a template like this:
 * ```colortemp
 * text %color,effect(more text) and more text
 * ```
 *
 * @param template The template string to fill.
 * @returns The template string with all placeholders replaced with the correct colors or effects.
 */
function colorizeTemplate(template) {
    (0, assertion_lib_1.assertTypeOf)(template, 'string', 'str');
    var output = '';
    var i = 0;
    while (i < template.length) {
        if (template[i] === '%') {
            if (template[i + 1] === '%') {
                output += '%';
                i += 2;
                continue;
            }
            var j = template.indexOf('(', i);
            if (j === -1) {
                throw new SyntaxError('Invalid template: missing opening parenthesis');
            }
            var k = template.indexOf(')', j);
            if (k === -1) {
                throw new SyntaxError('Invalid template: missing closing parenthesis');
            }
            var directive = template.slice(i + 1, j);
            var _a = directive.split(/,\s*/), color = _a[0], effects = _a.slice(1);
            if (!core_1.COLORS[color]) {
                throw new Error("Invalid color: ".concat(color));
            }
            var colorCode = core_1.COLORS[color];
            for (var _i = 0, effects_1 = effects; _i < effects_1.length; _i++) {
                var effect = effects_1[_i];
                var trimmedEffect = effect.trim();
                if (!core_1.EFFECTS[trimmedEffect]) {
                    throw new Error("Invalid effect: ".concat(trimmedEffect));
                }
                colorCode += core_1.EFFECTS[trimmedEffect];
            }
            output += "".concat(colorCode).concat(template.slice(j + 1, k), "\u001B[0m");
            i = k + 1;
            continue;
        }
        output += template[i];
        i++;
    }
    return output;
}
exports.colorizeTemplate = colorizeTemplate;

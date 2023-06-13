import { assertOneOf, assertTypeOf } from '@santi100/assertion-lib';
import type { ColorOrEffect, ArrayOfColorsOrEffects } from './core';
import { COLORS_AND_EFFECTS } from './core';
const warn = typeof console === 'undefined' ? () => void 0 : console.warn;
const log = typeof console === 'undefined' ? () => void 0 : console.log;
const warnOrLog = warn ?? log;
function __keys(o: Record<PropertyKey, unknown>) {
	if (Object?.keys) return Object.keys(o);
	else {
		const keys = [];
		for (const key in o) {
			keys.push(key);
		}
		return keys;
	}
}

/**
 * Color `str` with color `color`.
 *
 * @param str The string to paint in color!
 * @param color The color to paint the string in.
 */
export default function colorize(str: string, color: ColorOrEffect): string;
/**
 * Color `str` with colors `colors`.
 *
 * @param str The string to paint in color!
 * @param colors The colors to paint the string in.
 */
export default function colorize(
	str: string,
	colors: ArrayOfColorsOrEffects
): string;

/**
 * Color `str` with color(s) `color`.
 *
 * @param str The string to paint in color!
 * @param color The color(s) to paint the string in.
 */
export default function colorize(
	str: string,
	color: ArrayOfColorsOrEffects | ColorOrEffect
): string {
	assertTypeOf(str, 'string', 'str');
	if (!(color instanceof Array)) {
		assertTypeOf(color, 'string', 'color');
		assertOneOf(color, 'color', __keys(COLORS_AND_EFFECTS));
	}
	function generateFromArray(color: ArrayOfColorsOrEffects): string {
		let j = '';
		for (const item of color) {
			j += COLORS_AND_EFFECTS[item];
		}
		j += `${str}\x1b[0m`;
		return j;
	}
	return typeof color === 'string'
		? `${COLORS_AND_EFFECTS[color]}${str}\x1b[0m`
		: generateFromArray(color);
}
/**
 * @deprecated This is a deprecated alias for the main `colorize` function. Use {@link colorize} instead.
 */
export function coloring(str: string, colors: ColorOrEffect): string;
/**
 * @deprecated This is a deprecated alias for the main `colorize` function. Use {@link colorize} instead.
 */
export function coloring(str: string, colors: ArrayOfColorsOrEffects): string;
/**
 * @deprecated This is a deprecated alias for the main `colorize` function. Use {@link colorize} instead.
 */
export function coloring(
	...args: [string, ColorOrEffect | ArrayOfColorsOrEffects]
) {
	warnOrLog('coloring() is deprecated. Use colorize() instead.');
	return typeof args[1] !== 'string'
		? colorize(args[0], args[1] as ArrayOfColorsOrEffects)
		: colorize(args[0], args[1] as ColorOrEffect);
}
export { colorize };

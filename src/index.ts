import { assertOneOf, assertTypeOf } from '@santi100/assertion-lib';
const COLORS = {
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
type Color =
	| 'black'
	| 'red'
	| 'green'
	| 'yellow'
	| 'blue'
	| 'magenta'
	| 'cyan'
	| 'white'
	| 'bold'
	| 'blink'
	| 'conceal';
type Effect = 'bold' | 'blink' | 'conceal';
type ColorOrEffect = Color | Effect;
type ArrayOfColorsOrEffects = ColorOrEffect[];
function __keys(o: Record<any, any>) {
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
export function coloring(str: string, color: ColorOrEffect): string;
/**
 * Color `str` with colors `colors`.
 *
 * @param str The string to paint in color!
 * @param colors The colors to paint the string in.
 */
export function coloring(str: string, colors: ArrayOfColorsOrEffects): string;

/**
 * Color `str` with color(s) `color`.
 *
 * @param str The string to paint in color!
 * @param color The color(s) to paint the string in.
 */
export function coloring(
	str: string,
	color: ArrayOfColorsOrEffects | ColorOrEffect
): string {
	assertTypeOf(str, 'string', 'str');
	assertTypeOf(color, 'string', 'color');
	assertOneOf(color, 'color', __keys(COLORS));
	function generateFromArray(color: ArrayOfColorsOrEffects): string {
		let j = '';
		for (const item of color) {
			j += COLORS[item];
		}
		j += `${str}\x1b[0m`;
		return j;
	}
	return typeof color === 'string'
		? `${COLORS[color]}${str}\x1b[0m`
		: generateFromArray(color);
}
/**
 * Colors `text` in a rainbow pattern.
 *
 * @param str The string to paint in color!
 * @returns The colored string.
 */
export function rainbowify(str: string) {
	assertTypeOf(str, 'string', 'text');
	const colors = [
		COLORS.red,
		COLORS.yellow,
		COLORS.green,
		COLORS.cyan,
		COLORS.blue,
		COLORS.magenta
	]; // red, orange, yellow, green, blue, magenta
	const letters = ''.concat(str).split('');

	let coloredText = '';
	let colorIndex = 0;

	for (const element of letters) {
		const letter = element;
		const color = colors[colorIndex];
		coloredText += `${color}${letter}\x1b[0m`;
		colorIndex = (colorIndex + 1) % colors.length;
	}
	return coloredText;
}

/**
 * @class This is a colorizer class.
 */
export class Colorizer {
	private __string: string = '';
	constructor() {
		Object?.defineProperty?.(this, '__string' as keyof Colorizer, {
			enumerable: false
		});
	}
	/**
	 * Paints `text` in black.
	 *
	 * @param text The text to paint in black.
	 * @returns `this` object for chaining.
	 */
	black(text: string) {
		this.__string = `${this.__string}${COLORS.black}${text}`;
		return this;
	}
	/**
	 * Paints `text` in red.
	 *
	 * @param text The text to paint in red.
	 * @returns `this` object for chaining.
	 */
	red(text: string) {
		this.__string = `${this.__string}${COLORS.red}${text}`;
		return this;
	}
	/**
	 * Paints `text` in green.
	 *
	 * @param text The text to paint in green.
	 * @returns `this` object for chaining.
	 */
	green(text: string) {
		this.__string = `${this.__string}${COLORS.green}${text}`;
		return this;
	}
	/**
	 * Paints `text` in yellow.
	 *
	 * @param text The text to paint in yellow.
	 * @returns `this` object for chaining.
	 */
	yellow(text: string) {
		this.__string = `${this.__string}${COLORS.yellow}${text}`;
		return this;
	}
	/**
	 * Paints `text` in blue.
	 *
	 * @param text The text to paint in blue.
	 * @returns `this` object for chaining.
	 */
	blue(text: string) {
		this.__string = `${this.__string}${COLORS.blue}${text}`;
		return this;
	}
	/**
	 * Paints `text` in magenta.
	 *
	 * @param text The text to paint in magenta.
	 * @returns `this` object for chaining.
	 */
	magenta(text: string) {
		this.__string = `${this.__string}${COLORS.magenta}${text}`;
		return this;
	}
	/**
	 * Paints `text` in cyan.
	 *
	 * @param text The text to paint in cyan.
	 * @returns `this` object for chaining.
	 */
	cyan(text: string) {
		this.__string = `${this.__string}${COLORS.cyan}${text}`;
		return this;
	}
	/**
	 * Paints `text` in white.
	 *
	 * @param text The text to paint in white.
	 * @returns `this` object for chaining.
	 */
	white(text: string) {
		this.__string = `${this.__string}${COLORS.white}${text}`;
		return this;
	}
	/**
	 * Makes `text` **bold**.
	 *
	 * @param text The text to make **bold**.
	 * @returns `this` object for chaining.
	 */
	bold(text: string) {
		this.__string = `${this.__string}${COLORS.bold}${text}`;
		return this;
	}
	/**
	 * Makes `text` blink.
	 *
	 * @param text The text to make blink.
	 * @returns `this` object for chaining.
	 */
	blink(text: string) {
		this.__string = `${this.__string}${COLORS.blink}${text}`;
		return this;
	}
	/**
	 * Conceals `text`.
	 *
	 * @param text The text to conceal.
	 * @returns `this` object for chaining.
	 */
	conceal(text: string) {
		this.__string = `${this.__string}${COLORS.conceal}${text}`;
		return this;
	}
	/**
	 * Turns this object into the final string.
	 *
	 * @returns The string with all colors in this object.
	 */
	toString() {
		return `${this.__string}\x1b[0m`;
	}
	/**
	 * Resolves the object to the final string.
	 * @deprecated Use {@link Colorizer.prototype.toString} instead.
	 */
	resolve() {
		(
			(typeof console === 'undefined' ? () => {} : console.warn) ||
			(typeof console === 'undefined' ? () => {} : console.log)
		)(
			'Coloring.prototype.resolve() is deprecated. Use Coloring.prototype.toString() instead.'
		);
		return this.toString();
	}
}
/**
 * @deprecated This is a deprecated alias for the `Colorizer` class. Use {@link Colorizer} instead.
 */
export const Coloring = Colorizer;
export type { ArrayOfColorsOrEffects, ColorOrEffect, Color, Effect };

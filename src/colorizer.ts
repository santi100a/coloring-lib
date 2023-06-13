import { assertTypeOf } from '@santi100/assertion-lib';
import { COLORS, EFFECTS } from './core';
const warn = typeof console === 'undefined' ? () => void 0 : console.warn;
const log = typeof console === 'undefined' ? () => void 0 : console.log;
const warnOrLog = warn ?? log;

/**
 * @class This is a colorizer class.
 */
export class Colorizer {
	private __string = '';
	constructor(initialString?: string) {
		if (initialString !== void 0)
			assertTypeOf(initialString, 'string', 'initialString');
		Object?.defineProperty?.(this, '__string' as keyof Colorizer, {
			enumerable: false,
		});
		this.__string = initialString ?? this.__string;
	}
	/**
	 * Creates a new colorizer exactly like the current one.
	 *
	 * @returns A copy of this colorizer.
	 */
	copy() {
		return new Colorizer(this.__string);
	}
	/**
	 * Paints `text` in black.
	 *
	 * @param text The text to paint in black.
	 * @returns `this` object for chaining.
	 */
	black(text: string) {
		this.__string += `${COLORS.black}${text}`;
		return this;
	}
	/**
	 * Paints `text` in red.
	 *
	 * @param text The text to paint in red.
	 * @returns `this` object for chaining.
	 */
	red(text: string) {
		this.__string += `${COLORS.red}${text}`;
		return this;
	}
	/**
	 * Paints `text` in green.
	 *
	 * @param text The text to paint in green.
	 * @returns `this` object for chaining.
	 */
	green(text: string) {
		this.__string += `${COLORS.green}${text}`;
		return this;
	}
	/**
	 * *Italicizes* `text`.

	 * @param text The text to be `italicized`.
	 * @returns `this` object for chaining.	
	 */
	italic(text: string) {
		this.__string += `${EFFECTS.italic}${text}`;
	}
	/**
	 * Paints `text` in yellow.
	 *
	 * @param text The text to paint in yellow.
	 * @returns `this` object for chaining.
	 */
	yellow(text: string) {
		this.__string += `${COLORS.yellow}${text}`;
		return this;
	}
	/**
	 * Paints `text` in blue.
	 *
	 * @param text The text to paint in blue.
	 * @returns `this` object for chaining.
	 */
	blue(text: string) {
		this.__string += `${COLORS.blue}${text}`;
		return this;
	}
	/**
	 * Paints `text` in magenta.
	 *
	 * @param text The text to paint in magenta.
	 * @returns `this` object for chaining.
	 */
	magenta(text: string) {
		this.__string += `${COLORS.magenta}${text}`;
		return this;
	}
	/**
	 * Paints `text` in cyan.
	 *
	 * @param text The text to paint in cyan.
	 * @returns `this` object for chaining.
	 */
	cyan(text: string) {
		this.__string += `${COLORS.cyan}${text}`;
		return this;
	}
	/**
	 * Paints `text` in white.
	 *
	 * @param text The text to paint in white.
	 * @returns `this` object for chaining.
	 */
	white(text: string) {
		this.__string += `${COLORS.white}${text}`;
		return this;
	}
	/**
	 * Makes `text` **bold**.
	 *
	 * @param text The text to make **bold**.
	 * @returns `this` object for chaining.
	 */
	bold(text: string) {
		this.__string += `${EFFECTS.bold}${text}`;
		return this;
	}
	/**
	 * Makes `text` blink.
	 *
	 * @param text The text to make blink.
	 * @returns `this` object for chaining.
	 */
	blink(text: string) {
		this.__string += `${EFFECTS.blink}${text}`;
		return this;
	}
	/**
	 * Conceals `text`.
	 *
	 * @param text The text to conceal.
	 * @returns `this` object for chaining.
	 */
	conceal(text: string) {
		this.__string += `${EFFECTS.conceal}${text}`;
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
		warnOrLog(
			'Colorizer.prototype.resolve() is deprecated. Use Colorizer.prototype.toString() instead.'
		);
		return this.toString();
	}
}
/**
 * @deprecated This is a deprecated alias for the `Colorizer` class. Use {@link Colorizer} instead.
 */
export class Coloring extends Colorizer {
	constructor() {
		warnOrLog();
		super();
	}
}

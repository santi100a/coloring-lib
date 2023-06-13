export const EFFECTS = {
	bold: '\x1b[1m',
	italic: '\x1b[3m',
	underline: '\x1b[4m',
	blink: '\x1b[5m',
	conceal: '\x1b[8m',
};

export const COLORS = {
	black: '\x1b[30m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m',
	white: '\x1b[37m',
};
export const COLORS_AND_EFFECTS = { ...COLORS, ...EFFECTS };
/**
 * A color or effect to paint a string in or apply to a string.
 */

export type Color = keyof typeof COLORS;
/**
 * An effect you can give to a string.
 */
export type Effect = keyof typeof EFFECTS;
/**
 * A valid color or effect.
 */
export type ColorOrEffect = Color | Effect;
/**
 * An array of valid colors or effects.
 */
export type ArrayOfColorsOrEffects = ColorOrEffect[];
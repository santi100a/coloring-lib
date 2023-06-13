export declare const EFFECTS: {
    bold: string;
    italic: string;
    underline: string;
    blink: string;
    conceal: string;
};
export declare const COLORS: {
    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;
};
export declare const COLORS_AND_EFFECTS: {
    bold: string;
    italic: string;
    underline: string;
    blink: string;
    conceal: string;
    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;
};
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

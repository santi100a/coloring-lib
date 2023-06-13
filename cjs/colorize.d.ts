import type { ColorOrEffect, ArrayOfColorsOrEffects } from './core';
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
export default function colorize(str: string, colors: ArrayOfColorsOrEffects): string;
/**
 * @deprecated This is a deprecated alias for the main `colorize` function. Use {@link colorize} instead.
 */
export declare function coloring(str: string, colors: ColorOrEffect): string;
/**
 * @deprecated This is a deprecated alias for the main `colorize` function. Use {@link colorize} instead.
 */
export declare function coloring(str: string, colors: ArrayOfColorsOrEffects): string;
export { colorize };

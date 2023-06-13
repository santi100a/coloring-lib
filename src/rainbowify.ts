import { assertTypeOf } from '@santi100/assertion-lib';
import { COLORS } from './core';

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
		COLORS.magenta,
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

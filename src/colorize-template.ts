import { assertTypeOf } from '@santi100/assertion-lib';
import { Color, Effect, COLORS, EFFECTS } from './core';

/**
 * Fills `str`, given that it is a template like this:
 * ```colortemp
 * text %color,effect(more text) and more text
 * ```
 * 
 * @param template The template string to fill.
 * @returns The template string with all placeholders replaced with the correct colors or effects.
 */
export function colorizeTemplate(template: string) {
	assertTypeOf(template, 'string', 'str');
	let output = '';
	let i = 0;
	while (i < template.length) {
		if (template[i] === '%') {
			if (template[i + 1] === '%') {
				output += '%';
				i += 2;
				continue;
			}
			const j = template.indexOf('(', i);
			if (j === -1) {
				throw new SyntaxError('Invalid template: missing opening parenthesis');
			}
			const k = template.indexOf(')', j);
			if (k === -1) {
				throw new SyntaxError('Invalid template: missing closing parenthesis');
			}
			const directive = template.slice(i + 1, j);
			const [color, ...effects] = directive.split(/,\s*/) as [
				Color,
				...Effect[]
			];
			if (!COLORS[color]) {
				throw new Error(`Invalid color: ${color}`);
			}
			let colorCode = COLORS[color];
			for (const effect of effects) {
				const trimmedEffect = effect.trim() as Effect;
				if (!EFFECTS[trimmedEffect]) {
					throw new Error(`Invalid effect: ${trimmedEffect}`);
				}
				colorCode += EFFECTS[trimmedEffect];
			}
			output += `${colorCode}${template.slice(j + 1, k)}\x1b[0m`;
			i = k + 1;
			continue;
		}
		output += template[i];
		i++;
	}

	return output;
}

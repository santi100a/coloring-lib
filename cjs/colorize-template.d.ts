/**
 * Fills `str`, given that it is a template like this:
 * ```colortemp
 * text %color,effect(more text) and more text
 * ```
 *
 * @param template The template string to fill.
 * @returns The template string with all placeholders replaced with the correct colors or effects.
 */
export declare function colorizeTemplate(template: string): string;

/**
 * @class This is a colorizer class.
 */
export declare class Colorizer {
    private __string;
    constructor(initialString?: string);
    /**
     * Creates a new colorizer exactly like the current one.
     *
     * @returns A copy of this colorizer.
     */
    copy(): Colorizer;
    /**
     * Paints `text` in black.
     *
     * @param text The text to paint in black.
     * @returns `this` object for chaining.
     */
    black(text: string): this;
    /**
     * Paints `text` in red.
     *
     * @param text The text to paint in red.
     * @returns `this` object for chaining.
     */
    red(text: string): this;
    /**
     * Paints `text` in green.
     *
     * @param text The text to paint in green.
     * @returns `this` object for chaining.
     */
    green(text: string): this;
    /**
     * *Italicizes* `text`.

     * @param text The text to be `italicized`.
     * @returns `this` object for chaining.
     */
    italic(text: string): void;
    /**
     * Paints `text` in yellow.
     *
     * @param text The text to paint in yellow.
     * @returns `this` object for chaining.
     */
    yellow(text: string): this;
    /**
     * Paints `text` in blue.
     *
     * @param text The text to paint in blue.
     * @returns `this` object for chaining.
     */
    blue(text: string): this;
    /**
     * Paints `text` in magenta.
     *
     * @param text The text to paint in magenta.
     * @returns `this` object for chaining.
     */
    magenta(text: string): this;
    /**
     * Paints `text` in cyan.
     *
     * @param text The text to paint in cyan.
     * @returns `this` object for chaining.
     */
    cyan(text: string): this;
    /**
     * Paints `text` in white.
     *
     * @param text The text to paint in white.
     * @returns `this` object for chaining.
     */
    white(text: string): this;
    /**
     * Makes `text` **bold**.
     *
     * @param text The text to make **bold**.
     * @returns `this` object for chaining.
     */
    bold(text: string): this;
    /**
     * Makes `text` blink.
     *
     * @param text The text to make blink.
     * @returns `this` object for chaining.
     */
    blink(text: string): this;
    /**
     * Conceals `text`.
     *
     * @param text The text to conceal.
     * @returns `this` object for chaining.
     */
    conceal(text: string): this;
    /**
     * Turns this object into the final string.
     *
     * @returns The string with all colors in this object.
     */
    toString(): string;
    /**
     * Resolves the object to the final string.
     * @deprecated Use {@link Colorizer.prototype.toString} instead.
     */
    resolve(): string;
}
/**
 * @deprecated This is a deprecated alias for the `Colorizer` class. Use {@link Colorizer} instead.
 */
export declare class Coloring extends Colorizer {
    constructor();
}

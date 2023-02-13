import { assert, assertType } from '@santi100/assertion-lib';
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
  conceal: '\x1b[8m',
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
type Parameter = Color | Effect;
type ParameterArray = Parameter[];
/**
 * Color `string` with color(s) `color`.
 *
 * @param string The string to paint in color!
 * @param color The colors to paint the string in.
 */
function coloring(str: string, color: ParameterArray | Parameter): string {
  const isColorValid = Array.isArray(color) || color in COLORS;
  assertType(str, 'string');
  assert(isColorValid);
  function generateFromArray(color: ParameterArray): string {
    let j = '';
    for (const item of color) {
      j += COLORS[item];
    }
    j += `{str}\x1b[0m`;
    return j;
  }
  return typeof color === 'string'
    ? `${COLORS[color]}${str}\x1b[0m`
    : generateFromArray(color);
}
/**
 * @class This is a coloring class.
 */
class Coloring {
  private _colors: string = '';
  /**
   * Paints `text` in black.
   *
   * @param text The text to paint in black.
   * @returns `this` object for chaining.
   */
  black(text: string) {
    this._colors = `${this._colors}${COLORS.black}${text}`;
    return this;
  }
  /**
   * Paints `text` in red.
   *
   * @param text The text to paint in red.
   * @returns `this` object for chaining.
   */
  red(text: string) {
    this._colors = `${this._colors}${COLORS.red}${text}`;
    return this;
  }
  /**
   * Paints `text` in green.
   *
   * @param text The text to paint in green.
   * @returns `this` object for chaining.
   */
  green(text: string) {
    this._colors = `${this._colors}${COLORS.green}${text}`;
    return this;
  }
  /**
   * Paints `text` in yellow.
   *
   * @param text The text to paint in yellow.
   * @returns `this` object for chaining.
   */
  yellow(text: string) {
    this._colors = `${this._colors}${COLORS.yellow}${text}`;
    return this;
  }
  /**
   * Paints `text` in blue.
   *
   * @param text The text to paint in blue.
   * @returns `this` object for chaining.
   */
  blue(text: string) {
    this._colors = `${this._colors}${COLORS.blue}${text}`;
    return this;
  }
  /**
   * Paints `text` in magenta.
   *
   * @param text The text to paint in magenta.
   * @returns `this` object for chaining.
   */
  magenta(text: string) {
    this._colors = `${this._colors}${COLORS.magenta}${text}`;
    return this;
  }
  /**
   * Paints `text` in cyan.
   *
   * @param text The text to paint in cyan.
   * @returns `this` object for chaining.
   */
  cyan(text: string) {
    this._colors = `${this._colors}${COLORS.cyan}${text}`;
    return this;
  }
  /**
   * Paints `text` in white.
   *
   * @param text The text to paint in white.
   * @returns `this` object for chaining.
   */
  white(text: string) {
    this._colors = `${this._colors}${COLORS.white}${text}`;
    return this;
  }
  /**
   * Makes `text` **bold**.
   *
   * @param text The text to make **bold**.
   * @returns `this` object for chaining.
   */
  bold(text: string) {
    this._colors = `${this._colors}${COLORS.bold}${text}`;
    return this;
  }
  /**
   * Makes `text` blink.
   *
   * @param text The text to make blink.
   * @returns `this` object for chaining.
   */
  blink(text: string) {
    this._colors = `${this._colors}${COLORS.blink}${text}`;
    return this;
  }
  /**
   * Conceals `text`.
   *
   * @param text The text to conceal.
   * @returns `this` object for chaining.
   */
  conceal(text: string) {
    this._colors = `${this._colors}${COLORS.conceal}${text}`;
    return this;
  }
  /**
   * Turns this object into the final string.
   *
   * @returns The string with all colors in this object.
   */
  toString() {
    return `${this._colors}\x1b[0m`;
  }
  /**
   * Resolves the object to the final string.
   * @deprecated Use {@link Coloring.prototype.toString} instead.
   */
  resolve() {
    console.warn(
      'Coloring.prototype.resolve() is deprecated. Use Coloring.prototype.toString() instead.'
    );
    return this.toString();
  }
}

export { coloring, Coloring };

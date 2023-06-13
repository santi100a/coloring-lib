# Santi's Coloring Library

[![Build Status](https://github.com/santi100a/coloring-lib/actions/workflows/ci.yml/badge.svg)](https://github.com/santi100a/coloring-lib/actions)
[![npm homepage](https://img.shields.io/npm/v/@santi100/coloring-lib)](https://npmjs.org/package/@santi100/coloring-lib)
[![GitHub stars](https://img.shields.io/github/stars/santi100a/coloring-lib.svg)](https://github.com/santi100a/coloring-lib)
[![License](https://img.shields.io/github/license/santi100a/coloring-lib.svg)](https://github.com/santi100a/coloring-lib)
[![Bundlephobia stats](https://img.shields.io/bundlephobia/min/@santi100/coloring-lib)](https://bundlephobia.com/package/@santi100/coloring-lib@latest)

- 🚀 Lightweight and fast[^](#disclaimers)
- 👴 ES3-compliant[*](#disclaimers)
- 💻 Portable between the browser and Node.js

## What's this?

This is a coloring library that uses ANSI sequences to color text on a terminal.
Be aware there might be bugs hidden in this code. Pull requests and issues are welcome!

## Contribute

Wanna contribute? [File an issue](https://github.com/santi100a/coloring-lib/issues) or [pull request](https://github.com/santi100a/coloring-lib/pulls)!
Make sure you follow the [contribution Code of Conduct](https://github.com/santi100a/coloring-lib/blob/main/CODE_OF_CONDUCT.md).

## Installation

- Via NPM: `npm install @santi100/coloring-lib`
- Via Yarn: `yarn add @santi100/coloring-lib`
- Via PNPM: `pnpm install @santi100/coloring-lib`

## API

### Functions

**The** `coloring` **function is a deprecated alias for the** `colorize` **function.**
**Use** `colorize` **instead.**

- `colorize(str: string, color: ColorOrEffect): string;` **NEW!**

Color  `str` with color  `color`.

  | Parameter | Type            | Description                         |
  |-----------|-----------------|-------------------------------------|
  | str       | `string`        | The string to paint in color.       |
  | color     | `ColorOrEffect` | The color to paint the string in.   |

  Returns a string of the colored text.

- `colorize(str: string, colors: ArrayOfColorsOrEffects): string;` **NEW!**

  Color `str` with colors `colors`.

  | Parameter | Type                     | Description                                   |
  |-----------|--------------------------|-----------------------------------------------|
  | `str`     | `string`                 | The string to paint in color.                 |
  | `colors`  | `ArrayOfColorsOrEffects` | The colors to paint the string in.            |

  Returns a string of the colored text.

- `rainbowify(str: string): string;` **NEW!**

  Colors `str` in a rainbow pattern.

  | Parameter | Type                    | Description                                  |
  |-----------|-------------------------|----------------------------------------------|
  | `str`     | `string`                | The string to paint in color.                |
  
  Returns a string of the rainbow colored text.

- `function colorizeTemplate(template: string): string;` **NEW!**

  Fills `template`, given that it is a template like this:

  ```colortemp
  text %color,effect(more text) and more text
  ```

  |   Parameter    | Type                    | Description                                  |
  |----------------|-------------------------|----------------------------------------------|
  | `template`     | `string`                | The template string to fill.                |

  Returns the template string with all placeholders replaced with the correct colors or effects.

### Classes

- `class Colorizer`:

  This is a colorizer object class.
  Its instance methods are called the same as the colors/effects, and you can chain them.
  To convert the object to a string, call the `Colorizer.prototype.toString()` method.

  `Colorizer.prototype.resolve()` **is a deprecated alias for** `Colorizer.prototype.toString()`.
  **Use** `Colorizer.prototype.toString()` **instead.**

  **The** `Coloring` **class is a deprecated alias for the** `Colorizer` **class.**
  **Use** `Colorizer` **instead.**

### Types

- `type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';`
  A color to paint a string in.
- `type Effect = 'bold' | 'blink' | 'conceal' | 'italic' | 'underline';`
  An effect you can give to a string.
  **NEW!** Italic and underline were introduced in version 1.1.2.
- `type ColorOrEffect = Color | Effect;`
  A valid color or effect.
- `type ArrayOfColorsOrEffects = ColorOrEffect[];`
  An array of valid colors or effects.

## Disclaimers

**Hasn't been tested in an actual ES3 environment. Feel free to open an issue or pull request if you find any non-ES3 thing. See "Contribute" for instructions on how to do so.*

*^The source code is about 2 kilobytes.*

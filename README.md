# Santi's Coloring Library 
[![Build Status](https://github.com/santi100a/coloring-lib/actions/workflows/test.yml/badge.svg)](https://github.com/santi100a/coloring-lib/actions)
[![npm homepage](https://img.shields.io/npm/v/@santi100/coloring-lib)](https://npmjs.org/package/@santi100/coloring-lib)
[![GitHub stars](https://img.shields.io/github/stars/santi100a/coloring-lib.svg)](https://github.com/santi100a/coloring-lib)
[![License](https://img.shields.io/github/license/santi100a/coloring-lib.svg)](https://github.com/santi100a/coloring-lib)
[![Bundlephobia stats](https://img.shields.io/bundlephobia/min/@santi100/coloring-lib)](https://bundlephobia.com/package/@santi100/coloring-lib@latest)

- 🚀 Lightweight and fast^
- 👴 ES3-compliant*
- 💻 Portable between the browser and Node.js

**Hasn't been tested in an actual ES3 environment. Feel free to open an issue or pull request if you find any non-ES3 thing. See "Contribute" for instructions on how to do so.*

*^The source code is about 2 kilobytes.*

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
- `coloring(str: string, color: ColorOrEffect): string;`
Color  `str` with color  `color`.

  | Parameter | Type            | Description                         |
  |-----------|-----------------|-------------------------------------|
  | str       | `string`        | The string to paint in color.       |
  | color     | `ColorOrEffect` | The color to paint the string in.   | 

  Returns a string of the colored text.

- `coloring(str: string, colors: ArrayOfColorsOrEffects): string;`
  Color `str` with colors `colors`.

  | Parameter | Type                     | Description                                   |
  |-----------|--------------------------|-----------------------------------------------|
  | `str`     |	`string`                 | The string to paint in color.                 |
  | `colors`  | `ArrayOfColorsOrEffects` | The colors to paint the string in.            |
 
  Returns a string of the colored text.

- `rainbowify(str: string): string;`
  Colors `str` in a rainbow pattern.

  | Parameter | Type	                | Description                                  |
  |-----------|-------------------------|----------------------------------------------|
  | `str`     | `string`                | The string to paint in color.	

  Returns a string of the rainbow colored text.

### Classes
- `class Colorizer`: This is a colorizer object class. 
  Its instance methods are called the same as the colors/effects, and you can chain them. 
  To convert the object to a string, call the `Colorizer.prototype.toString()` method.

  `Colorizer.prototype.resolve()` **is a deprecated alias for** `Colorizer.prototype.toString()`. 
  **Use** `Colorizer.prototype.toString()` **instead.**

  **The** `Coloring` **class is a deprecated alias for the** `Colorizer` **class.** 
  **Use** `Colorizer` **instead.**
## Types
- `type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'bold' | 'blink' | 'conceal';`
A color to paint a string in.
- `type Effect = 'bold' | 'blink' | 'conceal';`
An effect you can give to a string.
- `type ColorOrEffect = Color | Effect;`
A valid color or effect.
- `type ArrayOfColorsOrEffects = ColorOrEffect[];`
An array of valid colors or effects.
# Santi's Coloring Library (JavaScript)
[![Build Status](https://github.com/santi100a/coloring-lib/actions/workflows/main.yml/badge.svg)](https://github.com/santi100a/coloring-lib/actions)
[![GitHub stars](https://img.shields.io/github/stars/santi100a/coloring-lib.svg)](https://github.com/santi100a/coloring-lib)
[![License](https://img.shields.io/github/license/santi100a/coloring-lib.svg)](https://github.com/santi100a/coloring-lib)

This is a coloring library that uses ANSI sequences to color text on a terminal.
Be aware there might be bugs hidden in this code. Pull requests and issues are welcome!

## Installation

- Run ```npm install @santi100/coloring-lib```, ```yarn add @santi100/coloring-lib```, or ```pnpm install @santi100/coloring-lib```, depending on what package manager you use in your project.

## Usage
Be aware this library uses a subdirectory called `cjs/` for the CommonJS version of the code. The `index.js` file is just an ESM wrapper for it. Keep in mind we ship our own TypeScript definitions. You can import
`@santi100/coloring-lib` (for an ESM project), or `@santi100/coloring-lib/cjs` (for a CJS project or an ESM project that uses default imports).
### Exported Members

- ```coloring(string: string, color: Color): string;``` This function takes in a string to color, and one of 11 colors/effects: red, yellow, green, black, blue, magenta, cyan, white, bold, conceal and blink.

- ```coloring(string: string, color: Color[]): string;``` This function takes in a string to color, and an array of the aforementioned colors/effects. If you put two or more colors, the latter one/s will override the former/s.

- ```class Colorizer```: This is a colorizer object class. Its instance methods are called the same as the
colors/effects, and you can chain them. To convert the object to a string, call the ```Colorizer.prototype.toString()``` method.

```Colorizer.prototype.resolve()``` **is a deprecated alias for** `Colorizer.prototype.toString()`. Use ```Colorizer.prototype.toString()``` **instead.**
**The** `Coloring` **class is a deprecated alias for the** `Colorizer` **class.** 
**Use** `Colorizer` **instead.**
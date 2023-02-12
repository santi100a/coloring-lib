# Santi's Coloring Library (JavaScript)
[![Build Status](https://github.com/santi100a/coloring-lib/actions/workflows/main.yml/badge.svg)](https://github.com/santi100a/santitools-python/actions)
[![GitHub stars](https://img.shields.io/github/stars/santi100a/coloring-lib.svg)](https://github.com/santi100a/santitools-python)
[![License](https://img.shields.io/github/license/santi100a/coloring-lib.svg)](https://github.com/santi100a/santitools-python)

This is a coloring library that uses ANSI sequences to color text on a terminal.
Be aware there might be bugs hidden in this code. Pull requests and issues are welcome!

## Usage

### Importing from a JavaScript File

#### Via NPM 
Import ```@santi100/coloring-lib``` (for ESM) or ```@santi100/coloring-lib/cjs``` (for CJS).
#### Via Source Control 

Import ```./coloring-lib/index.js``` (ESM) or ```./coloring-lib/cjs/index.js``` (CJS).

### Installation

#### Via NPM

- Run ```npm install @santi100/coloring-lib```, ```yarn add @santi100/coloring-lib```, or ```pnpm install @santi100/coloring-lib```, depending on what package manager you use in your project.

#### Via Source Control

- Run ```git clone https://github.com/santi100a/coloring-lib```.
- Enter the directory and run ```npm install```, ```yarn install```, or ```pnpm install``` to install dependencies.

### Functions

```coloring(string: string, color: Color): string;``` This function takes in a string to color, and a color, which
can be one of 11 colors/effects: red, yellow, green, black, blue, magenta, cyan, white, bold, conceal and blink.

```coloring(string: string, color: Color[]): string;``` This function takes in a string to color, and an array of the aforementioned colors/effects. If you put two colors, the latter one/s will override the former/s.

```class Coloring```: This is a colorizer object class. Its instance methods are called the same as the
colors/effects, and you can chain them. To convert the object to a string, call the ```Coloring.prototype.resolve()``` method.

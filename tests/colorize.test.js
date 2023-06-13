describe('colorize function', () => {
    const { colorize } = require('..');
	describe('colorize', () => {
		test('The colorize function is valid', () => {
			expect(colorize).toBeInstanceOf(Function);
		});
		test('The colorize function works as expected with all colors', () => {
			expect(colorize('hello in black', 'black')).toBe(
				'\x1b[30mhello in black\x1b[0m'
			);
			expect(colorize('hello in red', 'red')).toBe(
				'\x1b[31mhello in red\x1b[0m'
			);
			expect(colorize('hello in green', 'green')).toBe(
				'\x1b[32mhello in green\x1b[0m'
			);
			expect(colorize('hello in yellow', 'yellow')).toBe(
				'\x1b[33mhello in yellow\x1b[0m'
			);
			expect(colorize('hello in blue', 'blue')).toBe(
				'\x1b[34mhello in blue\x1b[0m'
			);
			expect(colorize('hello in magenta', 'magenta')).toBe(
				'\x1b[35mhello in magenta\x1b[0m'
			);
			expect(colorize('hello in cyan', 'cyan')).toBe(
				'\x1b[36mhello in cyan\x1b[0m'
			);
			expect(colorize('hello in white', 'white')).toBe(
				'\x1b[37mhello in white\x1b[0m'
			);
			expect(colorize('hello in bold', 'bold')).toBe(
				'\x1b[1mhello in bold\x1b[0m'
			);
			expect(colorize('hello blinking', 'blink')).toBe(
				'\x1b[5mhello blinking\x1b[0m'
			);
			expect(colorize('hello concealed', 'conceal')).toBe(
				'\x1b[8mhello concealed\x1b[0m'
			);
		}); 
		test('it works with arrays of colors/effects', () => {
			expect(colorize('hello in bold red', ['red', 'bold'])).toBe(
				'\x1b[31m\x1b[1mhello in bold red\x1b[0m'
			);
			expect(colorize('hello in underlined cyan', ['underline', 'cyan'])).toBe(
				'\x1b[4m\x1b[36mhello in underlined cyan\x1b[0m'
			);
		});
	});
	describe('error handling', () => {
		test('colorize throws an error if there are too little arguments', () => {
			expect(() => colorize()).toThrow(TypeError);
			expect(() => colorize('hello')).toThrow(TypeError);
		});
		test('colorize throws an error if the type of the arguments is invalid', () => {
			expect(() => colorize(5)).toThrow(TypeError);
			expect(() => colorize(5, 'blue')).toThrow(TypeError);
			expect(() => colorize('hello', 5)).toThrow(TypeError);
		});
		test('colorize throws an error if called with an invalid color', () => {
			expect(() => colorize('hello', 'cyanide')).toThrow(TypeError);
		});
	});
});

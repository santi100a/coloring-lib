const { coloring, Colorizer, rainbowify } = require('../cjs/index.js');

describe('coloring-lib tests', () => {
	describe('coloring', () => {
		test('The coloring function is valid', () => {
			expect(coloring).toBeInstanceOf(Function);
		});
		test('The coloring function works as expected with all colors', () => {
			expect(coloring('hello in black', 'black')).toBe(
				'\x1b[30mhello in black\x1b[0m'
			);
			expect(coloring('hello in red', 'red')).toBe(
				'\x1b[31mhello in red\x1b[0m'
			);
			expect(coloring('hello in green', 'green')).toBe(
				'\x1b[32mhello in green\x1b[0m'
			);
			expect(coloring('hello in yellow', 'yellow')).toBe(
				'\x1b[33mhello in yellow\x1b[0m'
			);
			expect(coloring('hello in blue', 'blue')).toBe(
				'\x1b[34mhello in blue\x1b[0m'
			);
			expect(coloring('hello in magenta', 'magenta')).toBe(
				'\x1b[35mhello in magenta\x1b[0m'
			);
			expect(coloring('hello in cyan', 'cyan')).toBe(
				'\x1b[36mhello in cyan\x1b[0m'
			);
			expect(coloring('hello in white', 'white')).toBe(
				'\x1b[37mhello in white\x1b[0m'
			);
			expect(coloring('hello in bold', 'bold')).toBe(
				'\x1b[1mhello in bold\x1b[0m'
			);
			expect(coloring('hello blinking', 'blink')).toBe(
				'\x1b[5mhello blinking\x1b[0m'
			);
			expect(coloring('hello concealed', 'conceal')).toBe(
				'\x1b[8mhello concealed\x1b[0m'
			);
		});
		describe('error handling', () => {
			test('coloring throws an error if there are too little arguments', () => {
				expect(() => coloring()).toThrowError(TypeError);
				expect(() => coloring('hello')).toThrowError(TypeError);
			});
            test('coloring throws an error if the type of the arguments is invalid', () => {
                expect(() => coloring(5)).toThrow(TypeError);
                expect(() => coloring(5, 'blue')).toThrow(TypeError);
                expect(() => coloring('hello', 5)).toThrow(TypeError);
            });
            test('coloring throws an error if called with an invalid color', () => {
                expect(() => coloring('hello', 'cyanide')).toThrow(TypeError);
            })
		});
	});
	describe('Colorizer', () => {
		test('The Colorizer class works as expected', () => {
			const colorizer = new Colorizer();
			const obj = colorizer.red('red ').green('green');
			expect(obj.toString()).toBe('\x1b[31mred \x1b[32mgreen\x1b[0m');
		});
	});
	describe('rainbowify', () => {
		test('it can correctly rainbowify any string', () => {
			expect(rainbowify('supercalifragilisticexpialidocious')).toBe(
				'\x1B[31ms\x1B[0m\x1B[33mu\x1B[0m\x1B[32mp\x1B[0m\x1B[36me\x1B[0m\x1B[34mr\x1B[0m\x1B[35mc\x1B[0m\x1B[31ma\x1B[0m\x1B[33ml\x1B[0m\x1B[32mi\x1B[0m\x1B[36mf\x1B[0m\x1B[34mr\x1B[0m\x1B[35ma\x1B[0m\x1B[31mg\x1B[0m\x1B[33mi\x1B[0m\x1B[32ml\x1B[0m\x1B[36mi\x1B[0m\x1B[34ms\x1B[0m\x1B[35mt\x1B[0m\x1B[31mi\x1B[0m\x1B[33mc\x1B[0m\x1B[32me\x1B[0m\x1B[36mx\x1B[0m\x1B[34mp\x1B[0m\x1B[35mi\x1B[0m\x1B[31ma\x1B[0m\x1B[33ml\x1B[0m\x1B[32mi\x1B[0m\x1B[36md\x1B[0m\x1B[34mo\x1B[0m\x1B[35mc\x1B[0m\x1B[31mi\x1B[0m\x1B[33mo\x1B[0m\x1B[32mu\x1B[0m\x1B[36ms\x1B[0m'
			);
            expect(rainbowify('hello world'))
                .toBe('\x1B[31mh\x1B[0m\x1B[33me\x1B[0m\x1B[32ml\x1B[0m\x1B[36ml\x1B[0m\x1B[34mo\x1B[0m\x1B[35m \x1B[0m\x1B[31mw\x1B[0m\x1B[33mo\x1B[0m\x1B[32mr\x1B[0m\x1B[36ml\x1B[0m\x1B[34md\x1B[0m')
		});
        describe('error handling', () => {
            test('rainbowify throws an error if there are too little arguments', () => {
				expect(() => rainbowify()).toThrow(TypeError);
			});
            test('rainbowify throws an error if the type of the arguments is invalid', () => {
                expect(() => rainbowify(true)).toThrow(TypeError);
                expect(() => rainbowify(430)).toThrow(TypeError);
                expect(() => rainbowify(3.141)).toThrow(TypeError);
                expect(() => rainbowify([])).toThrow(TypeError);
                expect(() => rainbowify({})).toThrow(TypeError);
            })
        });
	});
});

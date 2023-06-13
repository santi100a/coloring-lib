// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Colorizer } = require('../cjs/index.js');
const { COLORS, EFFECTS, COLORS_AND_EFFECTS } = require('../cjs/core.js');

describe('coloring-lib tests', () => {
	describe('Colorizer', () => {
		describe('Colorizer', () => {
			test('The Colorizer class works as expected', () => {
				const colorizer = new Colorizer();
				const obj = colorizer.red('red ').green('green').toString();

				const expectedOutput = `${COLORS.red}red ${COLORS.green}green\x1b[0m`;
				expect(obj).toBe(expectedOutput);
			});

			test('The Colorizer class supports chaining', () => {
				const colorizer = new Colorizer();
				const obj = colorizer
					.red('red ')
					.green('green ')
					.blue('blue ')
					.yellow('yellow ')
					.black('black ')
					.magenta('magenta ')
					.cyan('cyan ')
					.white('and white in ')
					.bold('bold, ')
					.conceal('with some hidden text')
					.toString();

				const expectedOutput = `${COLORS.red}red ${COLORS.green}green ${COLORS.blue}blue ${COLORS.yellow}yellow ${COLORS.black}black ${COLORS.magenta}magenta ${COLORS.cyan}cyan ${COLORS.white}and white in ${EFFECTS.bold}bold, ${EFFECTS.conceal}with some hidden text\x1b[0m`;
				expect(obj).toBe(expectedOutput);
			});

			test('The Colorizer class resolves to the final string', () => {
				const colorizer = new Colorizer();
				const obj = colorizer.yellow('yellow').blink('blink').resolve();

				const expectedOutput = `${COLORS.yellow}yellow${EFFECTS.blink}blink\x1b[0m`;
				expect(obj).toBe(expectedOutput);
			});

			test('The Colorizer class toString() is equivalent to resolve()', () => {
				const colorizer = new Colorizer();
				const obj1 = colorizer.copy().green('green').resolve();
				const obj2 = colorizer.green('green').toString();

				expect(obj1).toBe(obj2);
			});
		});
	});
	test('code shart is equivalent to Colorizer', () => {
		expect(require('../colorizer').Colorizer).toBe(Colorizer);
	});
	test('the colorizer includes all keys from COLORS_AND_EFFECTS', () => {
		const colorsAndEffects = Object.keys(COLORS_AND_EFFECTS);
		const colorizerKeys = Reflect.ownKeys(new Colorizer());
		colorizerKeys
			.filter((v) => !['__string', 'toString'].includes(v))
			.forEach((key) => expect(colorsAndEffects).toContain(key));
	});
});

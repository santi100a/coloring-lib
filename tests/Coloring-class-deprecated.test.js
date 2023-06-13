// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Coloring } = require('../cjs/index.js');

describe('coloring-lib tests', () => {
	describe('Coloring', () => {
		test('The Coloring class works as expected', () => {
			const colorizer = new Coloring();
			const obj = colorizer.red('red ').green('green');
			expect(obj.toString()).toBe('\x1b[31mred \x1b[32mgreen\x1b[0m');
		});
	});
});
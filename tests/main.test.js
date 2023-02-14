const { coloring, Colorizer } = require('../cjs/index.js');

describe('coloring function test', () => {
    test('The coloring function is valid and handles errors as expected', () => {
        expect(typeof coloring)
            .toBe('function');
        try {
            coloring();
        } catch (e) {
            expect(e instanceof Error)
                .toBeTruthy();
        }
        try {
            coloring('hello');
        } catch (e) {
            expect(e instanceof Error)
                .toBeTruthy();
        }
    });
    test('The coloring function works as expected with all colors', () => {
        expect(coloring('hello in black', 'black'))
            .toBe('\x1b[30mhello in black\x1b[0m');
        expect(coloring('hello in red', 'red'))
            .toBe('\x1b[31mhello in red\x1b[0m');
        expect(coloring('hello in green', 'green'))
            .toBe('\x1b[32mhello in green\x1b[0m');
        expect(coloring('hello in yellow', 'yellow'))
            .toBe('\x1b[33mhello in yellow\x1b[0m'); 
        expect(coloring('hello in blue', 'blue'))
            .toBe('\x1b[34mhello in blue\x1b[0m');
        expect(coloring('hello in magenta', 'magenta'))
            .toBe('\x1b[35mhello in magenta\x1b[0m'); 
        expect(coloring('hello in cyan', 'cyan'))
            .toBe('\x1b[36mhello in cyan\x1b[0m');
        expect(coloring('hello in white', 'white'))
            .toBe('\x1b[37mhello in white\x1b[0m');
        expect(coloring('hello in bold', 'bold'))
            .toBe('\x1b[1mhello in bold\x1b[0m');
        expect(coloring('hello blinking', 'blink'))
            .toBe('\x1b[5mhello blinking\x1b[0m');
        expect(coloring('hello concealed', 'conceal')) 
            .toBe('\x1b[8mhello concealed\x1b[0m');
    });
    test('The Coloring class works as expected', () => {
        const colorizer = new Colorizer;
        const obj = colorizer.red('red ').green('green');
        expect(obj.toString())
            .toBe('\x1b[31mred \x1b[32mgreen\x1b[0m');
    });
});
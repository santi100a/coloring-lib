describe('rainbowify', () => {
    const { rainbowify } = require('..');
    test('it can correctly rainbowify any string', () => {
        expect(rainbowify('supercalifragilisticexpialidocious')).toBe(
            '\x1B[31ms\x1B[0m\x1B[33mu\x1B[0m\x1B[32mp\x1B[0m\x1B[36me\x1B[0m\x1B[34mr\x1B[0m\x1B[35mc\x1B[0m\x1B[31ma\x1B[0m\x1B[33ml\x1B[0m\x1B[32mi\x1B[0m\x1B[36mf\x1B[0m\x1B[34mr\x1B[0m\x1B[35ma\x1B[0m\x1B[31mg\x1B[0m\x1B[33mi\x1B[0m\x1B[32ml\x1B[0m\x1B[36mi\x1B[0m\x1B[34ms\x1B[0m\x1B[35mt\x1B[0m\x1B[31mi\x1B[0m\x1B[33mc\x1B[0m\x1B[32me\x1B[0m\x1B[36mx\x1B[0m\x1B[34mp\x1B[0m\x1B[35mi\x1B[0m\x1B[31ma\x1B[0m\x1B[33ml\x1B[0m\x1B[32mi\x1B[0m\x1B[36md\x1B[0m\x1B[34mo\x1B[0m\x1B[35mc\x1B[0m\x1B[31mi\x1B[0m\x1B[33mo\x1B[0m\x1B[32mu\x1B[0m\x1B[36ms\x1B[0m'
        );
        expect(rainbowify('hello world'))
            .toBe('\x1B[31mh\x1B[0m\x1B[33me\x1B[0m\x1B[32ml\x1B[0m\x1B[36ml\x1B[0m\x1B[34mo\x1B[0m\x1B[35m \x1B[0m\x1B[31mw\x1B[0m\x1B[33mo\x1B[0m\x1B[32mr\x1B[0m\x1B[36ml\x1B[0m\x1B[34md\x1B[0m')
    });
    test('code shart is equivalent to rainbowify', () => {
		expect(require('../rainbowify').rainbowify).toBe(rainbowify);
	})
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
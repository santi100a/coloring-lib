describe('colorizeTemplate', () => {
    const { colorizeTemplate } = require('..');
    it('should correctly colorize the template with single color and effect', () => {
      const result = colorizeTemplate('%red,bold(text)');
      expect(result).toBe('\x1b[31m\x1b[1mtext\x1b[0m');
    });
  
    it('should correctly colorize the template with multiple effects', () => {
      const result = colorizeTemplate('%blue,bold,underline(text)');
      expect(result).toBe('\x1b[34m\x1b[1m\x1b[4mtext\x1b[0m');
    });
  
    it('should ignore double percent sign (%%)', () => {
      const result = colorizeTemplate('%%red(text)');
      expect(result).toBe('%red(text)');
    });
  
    it('should throw SyntaxError for invalid template without opening parenthesis', () => {
      expect(() => {
        colorizeTemplate('%red,italictext)');
      }).toThrow(SyntaxError);
    });
  
    it('should throw SyntaxError for invalid template without closing parenthesis', () => {
      expect(() => {
        colorizeTemplate('%red,italic(text');
      }).toThrow(SyntaxError);
    });
  
    it('should throw Error for invalid color', () => {
      expect(() => {
        colorizeTemplate('%invalidColor(text)');
      }).toThrow(Error);
    });
  
    it('should throw Error for invalid effect', () => {
      expect(() => {
        colorizeTemplate('%red,invalidEffect(text)');
      }).toThrow(Error);
    });
    test('code shart is equivalent to Colorizer', () => {
		expect(require('../colorize-template').colorizeTemplate).toBe(colorizeTemplate);
	})
  });
  
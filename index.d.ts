declare type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue'  | 'magenta' | 'cyan' | 'white' | 
'bold' | 'blink' | 'conceal';
declare type Effect = 'bold' | 'blink' | 'conceal';
declare type Parameter = Color | Effect;
declare type ParameterArray = Parameter[];

/**
 * 
 * @param string The string to paint in color! 
 * @param color The color to paint the string in.
 */
declare function coloring(string: string, color: Color): string;
/**
 * 
 * @param string The string to paint in color! 
 * @param color The colors to paint the string in.
 */
declare function coloring(string: string, color: ParameterArray): string;

declare class Coloring {
    black(text: string): Coloring;
    red(text: string): Coloring;
    green(text: string): Coloring;
    yellow(text: string): Coloring;
    blue(text: string): Coloring;
    magenta(text: string): Coloring;
    cyan(text: string): Coloring;
    white(text: string): Coloring;
    bold(text: string): Coloring;
    blink(text: string): Coloring;
    conceal(text: string): Coloring;
    resolve(): string;
}
export { coloring, Coloring, type Color, type Effect, type Parameter, type ParameterArray };
export default coloring;
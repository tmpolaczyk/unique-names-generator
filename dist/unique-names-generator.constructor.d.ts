declare type Style = 'lowerCase' | 'upperCase' | 'capital';
export interface Config {
    dictionaries: string[][];
    separator?: string;
    length?: number;
    style?: Style;
    seed?: number;
}
export declare class UniqueNamesGenerator {
    private dictionaries;
    private length;
    private separator;
    private style;
    private seed;
    constructor(config: Config);
    generate(): string;
}
export {};

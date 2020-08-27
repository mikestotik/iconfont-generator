import { DEFAULT_CONFIG } from './config/default.config';

export interface Config {
    sourceDir?: string;
    fontName?: string;
    tagName?: string;
    classPrefix?: string;
    className?: string;
    fontTypes?: string[];
}

export class DefaultConfig implements Config {
    public readonly className: string;
    public readonly classPrefix: string;
    public readonly fontName: string;
    public readonly fontTypes: string[];
    public readonly sourceDir: string;
    public readonly tagName: string;

    constructor(options: Config) {
        this.fontTypes = options.fontTypes ? options.fontTypes : DEFAULT_CONFIG.FONT_TYPES;
        this.className =  options.className ? options.className : DEFAULT_CONFIG.CLASS_NAME;
        this.classPrefix =  options.classPrefix ? options.classPrefix : DEFAULT_CONFIG.CLASS_PREFIX;
        this.fontName =  options.fontName ? options.fontName : DEFAULT_CONFIG.FONT_NAME;
        this.sourceDir =  options.sourceDir ? options.sourceDir : DEFAULT_CONFIG.SOURCE_DIR;
        this.tagName =  options.tagName ? options.tagName : DEFAULT_CONFIG.TAG_NAME;
    }
}

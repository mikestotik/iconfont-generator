import process from 'process';
import { DefaultConfig } from './config.class';
import { Params } from './enum/params.enum';

const args: Array<string> = process.argv.slice(2);

let sourceDir: string;
let fontName: string;
let tagName: string;
let classPrefix: string;
let className: string;
let fontTypes: string[];

for (let i = 0; i < args.length; i++) {
    let value = args[i + 1];

    if (value && value[0] !== '-') {
        switch (args[i]) {
            case Params.SOURCE_DIR:
                sourceDir = value;
                break;
            case Params.FONT_TYPES:
                fontTypes = value.split(',').map(
                    i => i.trim()
                );
                break;
            case Params.FONT_NAME:
                fontName = value;
                break;
            case Params.CLASS_NAME:
                className = value;
                break;
            case Params.CLASS_PREFIX:
                classPrefix = value;
                break;
            case Params.TAG_NAME:
                tagName = value;
                break;
            default:
                break;
        }
    }
}

export const config = new DefaultConfig({
    sourceDir,
    fontName,
    tagName,
    classPrefix,
    className,
    fontTypes
});

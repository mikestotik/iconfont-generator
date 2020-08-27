import { FontTypes } from '../enum/font-types.enum';

export const DEFAULT_CONFIG = {
    SOURCE_DIR: 'vector',
    FONT_NAME: 'Icons',
    FONT_TYPES: [
        FontTypes.TTF,
        FontTypes.SVG,
        FontTypes.WOFF,
        FontTypes.WOFF2
    ],
    TAG_NAME: 'i',
    CLASS_PREFIX: 'icon',
    CLASS_NAME: 'icon'
};

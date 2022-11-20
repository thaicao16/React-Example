import { Platform, PlatformOSType } from 'react-native';

export type FontWeight =   | 'normal'
                    | 'bold'
                    | '100'
                    | '200'
                    | '300'
                    | '400'
                    | '500'
                    | '600'
                    | '700'
                    | '800'
                    | '900'

export interface Font {
    fontFamily: string;
    fontWeight?: FontWeight
}

export interface Fonts {
    regular: Font;
    semibold: Font;
    bold: Font;
}

const fontConfig = {
    default: {
        regular: {
            fontFamily: 'open_sans_regular',
            fontWeight: 'normal',
        },
        semibold: {
            fontFamily: 'open_sans_semi_bold',
            fontWeight: 'normal',
        },
        bold: {
            fontFamily: 'sharp_sans_bold',
            fontWeight: 'normal',
        },
    },
}


export function configureFonts(
    config?: { [platform in PlatformOSType | 'default']?: Fonts }
): Fonts {
    const fonts = Platform.select({ ...fontConfig, ...config }) as Fonts;
    return fonts;
}

export default {
    sharpSans: {
        bold: "sharp_sans_bold",
        semiBold: "open_sans_semi_bold",
        regular: "open_sans_regular"
    }
}

//        <item name="fontTitleBold">@font/sharp_sans_bold</item>
        // <item name="fontTitleHeader">@font/sharp_sans_bold</item>
        // <item name="fontTitleSemiBold">@font/sharp_sans_semi_bold</item>
        // <item name="fontButton">@font/open_sans_semi_bold</item>
        // <item name="fontParagraphRegular">@font/open_sans_regular</item>
        // <item name="fontParagraphSemiBold">@font/open_sans_semi_bold</item>
        // <item name="fontParagraphLarge">@font/open_sans_regular</item>
import {Styles, Types} from 'reactxp'

export type StyleTypesUnion =
    Types.ViewStyle
    | Types.ButtonStyle
    | Types.TextStyle
    | Types.ImageStyle
    | Types.PickerStyle

// the unprocessed styles
export interface ViewStyleMap {
    [className: string]: StyleTypesUnion
}

// the processed styles
export interface ViewStyleRuleSet {
    [className: string]:  Types.StyleRuleSet<StyleTypesUnion>
}

// creates a stylesheet
export const createStyleSheet = (stylesObject: ViewStyleMap): ViewStyleRuleSet => {
    const styleSheet = {} as ViewStyleRuleSet;
    for (let key in stylesObject) {
        if (stylesObject.hasOwnProperty(key)) {
            styleSheet[key] = Styles.createViewStyle(stylesObject[key]);
        }
    }
    return styleSheet;
};

// pass a boolean and a style to make it optional
export const optionalStyle = (test: boolean, style: StyleTypesUnion | Types.StyleRuleSet<StyleTypesUnion>| any): StyleTypesUnion | Types.StyleRuleSet<StyleTypesUnion> => {
    return test ? style : {};
};

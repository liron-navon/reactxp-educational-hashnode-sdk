import {Styles, Types} from 'reactxp'

type styleTypesUnion =
    Types.ViewStyle
    | Types.ButtonStyle
    | Types.TextStyle
    | Types.ImageStyle
    | Types.PickerStyle

// the unprocessed styles
interface ViewStyleMap {
    [className: string]: styleTypesUnion
}

// the processed styles
interface ViewStyleRuleSet {
    [className: string]:  Types.StyleRuleSet<styleTypesUnion>
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
export const optionalStyle = (test: boolean, style: styleTypesUnion | Types.StyleRuleSet<styleTypesUnion>| any): styleTypesUnion | Types.StyleRuleSet<styleTypesUnion> => {
    return test ? style : {};
};

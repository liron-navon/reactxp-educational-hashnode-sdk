import { Types } from 'reactxp';
declare type styleTypesUnion = Types.ViewStyle | Types.ButtonStyle | Types.TextStyle | Types.ImageStyle | Types.PickerStyle;
interface ViewStyleMap {
    [className: string]: styleTypesUnion;
}
interface ViewStyleRuleSet {
    [className: string]: Types.StyleRuleSet<styleTypesUnion>;
}
export declare const createStyleSheet: {
    (stylesObject: ViewStyleMap): ViewStyleRuleSet;
    displayName: string;
    __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {};
    };
};
export declare const optionalStyle: (test: boolean, style: any) => Types.StyleRuleSet<styleTypesUnion>;
export {};

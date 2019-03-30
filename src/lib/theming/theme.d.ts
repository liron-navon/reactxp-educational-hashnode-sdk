declare let appTheme: {
    systemFont: string;
    spacing: number;
    borderRadius: {
        roundCorners: number;
    };
    shadow: (elevation?: number) => {
        shadowOffset: {
            height: number;
            width: number;
        };
        shadowRadius: number;
        shadowColor: string;
        elevation: number;
    };
    border: {
        borderColor: string;
        borderWidth: number;
    };
    colors: {
        primary: string;
        secondary: string;
        background: string;
        text: string;
        textContrast: string;
        transparent: string;
        grey: string;
    };
};
export declare const getTheme: () => {
    systemFont: string;
    spacing: number;
    borderRadius: {
        roundCorners: number;
    };
    shadow: (elevation?: number) => {
        shadowOffset: {
            height: number;
            width: number;
        };
        shadowRadius: number;
        shadowColor: string;
        elevation: number;
    };
    border: {
        borderColor: string;
        borderWidth: number;
    };
    colors: {
        primary: string;
        secondary: string;
        background: string;
        text: string;
        textContrast: string;
        transparent: string;
        grey: string;
    };
};
export declare const getDefaultTheme: () => {
    systemFont: string;
    spacing: number;
    borderRadius: {
        roundCorners: number;
    };
    shadow: (elevation?: number) => {
        shadowOffset: {
            height: number;
            width: number;
        };
        shadowRadius: number;
        shadowColor: string;
        elevation: number;
    };
    border: {
        borderColor: string;
        borderWidth: number;
    };
    colors: {
        primary: string;
        secondary: string;
        background: string;
        text: string;
        textContrast: string;
        transparent: string;
        grey: string;
    };
};
export declare const updateTheme: {
    (newTheme: Partial<{
        systemFont: string;
        spacing: number;
        borderRadius: {
            roundCorners: number;
        };
        shadow: (elevation?: number) => {
            shadowOffset: {
                height: number;
                width: number;
            };
            shadowRadius: number;
            shadowColor: string;
            elevation: number;
        };
        border: {
            borderColor: string;
            borderWidth: number;
        };
        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
            textContrast: string;
            transparent: string;
            grey: string;
        };
    }>): void;
    displayName: string;
    __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {
            "systemFont": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "spacing": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "borderRadius": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "shadow": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "border": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "colors": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
        };
    };
};
export default appTheme;

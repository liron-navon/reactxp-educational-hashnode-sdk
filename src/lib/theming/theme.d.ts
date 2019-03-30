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
export declare const updateTheme: (newTheme: Partial<{
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
}>) => void;
export default appTheme;

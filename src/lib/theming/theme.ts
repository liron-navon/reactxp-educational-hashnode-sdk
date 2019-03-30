import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';

const defaultAppTheme = {
    systemFont: 'system font',
    spacing: 8,
    borderRadius: {
        roundCorners: 4
    },
    // use spread operator to apply these
    shadow: (elevation: number = 1) => ({
        shadowOffset: { height: elevation * 2, width: elevation * 2 },
        shadowRadius: elevation === 0 ? 0 : 3,
        shadowColor: 'rgba(0,0,0,0.5)',
        elevation: elevation
    }),
    border: {
        borderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 1
    },
    colors: {
        primary: '#e10050',
        secondary: '#2196f3',
        background: 'white',
        text: 'black',
        textContrast: 'white',
        transparent: 'transparent',
        grey: 'lightgrey'
    }
};

let appTheme = cloneDeep(defaultAppTheme);

// returns a clone of the theme
export const getTheme = () => cloneDeep(appTheme);

// returns a clone of the default theme
export const getDefaultTheme = () => cloneDeep(defaultAppTheme);

// update the theme
export const updateTheme = (newTheme: Partial<typeof defaultAppTheme>) => {
    merge(appTheme, newTheme);
};

export default appTheme;

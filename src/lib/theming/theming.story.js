import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import {updateTheme, getDefaultTheme} from './theme';

const ThemeComponent = () => {
    const [theme, setTheme] = useState('light');

    const getNextTheme = () => theme === 'light' ? 'dark' : 'light';
    const toggleTheme = () => {
        const defaultTheme = getDefaultTheme();
        const isLight = getNextTheme() === 'light';
        const themeChanges = {
            colors: {
                primary: isLight ? defaultTheme.colors.primary : 'black',
                textContrast: isLight ? defaultTheme.colors.textContrast : 'yellow',
                background: isLight ? defaultTheme.colors.background : 'grey'
            },
            border: {
                borderColor: isLight ? defaultTheme.border.borderColor : 'yellow',
            }
        };
        updateTheme(themeChanges);
        setTheme(getNextTheme());
    };

    const buttonText = `change theme to ${getNextTheme()}`;

    const textColor = theme === 'light' ? 'black' : 'yellow';
    return (
        <div>
            <Card>
                <h3 style={{textAlign: 'center', color: textColor}}>
                    You can easily change theme here, the current theme is <strong
                    style={{color: 'blue'}}>{theme.toUpperCase()}</strong>
                </h3>

                <Button
                    type={'primary'}
                    accessibilityLabel={buttonText}
                    onPress={toggleTheme}
                    title={buttonText}
                    upper
                />
            </Card>

            <Card>
                <div style={{color: textColor}}>
                    <h3>
                        There are 3 exported theme functions:
                    </h3>

                    <p>
                        <strong>updateTheme</strong> - expects a partial theme, and applies it to the RX components.
                    </p>

                    <p>
                        <strong>getDefaultTheme</strong> - return a clone of the default theme.
                    </p>

                    <p>
                        <strong>getTheme</strong> - return a clone of the current theme.
                    </p>

                    <p>
                        <strong>**</strong> You should give the root component a key that defines the theme, and it will force render all the
                        components with the new theme, no need for nasty providers.
                    </p>
                </div>
            </Card>
        </div>
    )
};

storiesOf('theming/theming', module)
    .add(
        'default',
        () => <ThemeComponent/>,
        {info: {disable: true}}
    );

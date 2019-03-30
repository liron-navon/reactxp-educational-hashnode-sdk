import React from 'react';
import {
    Button as RXButton,
    Text,
    Styles,
    Types,
    Animated,
    Component
} from 'reactxp';
import {createStyleSheet, optionalStyle} from '../../utils/styleHelpers';
import theme from "../../theming/theme";
import {isReactNative} from "../../utils/platform";

// the prop types for the button
interface ButtonProps extends Types.ButtonProps {
    /** the type of the button */
    type?: 'default' | 'primary' | 'secondary' | 'flat',
    /** extra style for the button title */
    titleStyle?: Types.StyleRuleSet<Types.TextStyle>,
    /** uppercase the title */
    upper?: boolean,
    /** disable the hover style, hover style only work on the web */
    disableHoverStyle?: boolean
}

function createButtonStyles() {
    const styles = createStyleSheet({
        root: {
            padding: 0,
            margin: 0
        },
        buttonBase: {
            margin: 16,
            borderRadius: 4,
            ...theme.shadow(1)
        },
        buttonPressed: {
            ...theme.shadow(2)
        },
        text: {
            fontSize: 16,
            marginVertical: theme.spacing,
            marginHorizontal: theme.spacing * 2,
            textAlign: 'center'
        }
    });

// add some extra styling for different button types
    const buttonTypeStyles = {
        default: createStyleSheet({
            button: {
                backgroundColor: theme.colors.grey,
            },
            text: {
                color: theme.colors.text
            }
        }),
        primary: createStyleSheet({
            button: {
                backgroundColor: theme.colors.primary,
            },
            text: {
                color: theme.colors.textContrast
            }
        }),
        secondary: createStyleSheet({
            button: {
                backgroundColor: theme.colors.secondary,
            },
            text: {
                color: theme.colors.textContrast
            }
        }),
        flat: createStyleSheet({
            button: {
                backgroundColor: theme.colors.transparent,
                ...theme.shadow(0)
            },
            text: {
                color: theme.colors.text
            }
        })
    };

    return {styles, buttonTypeStyles};
}

/** A simple button component */
class Button extends Component<ButtonProps> {
    state = {
        isPressed: false
    };

    // the opacity animation to allow better control of it
    hoverAnimation: Types.Animated.CompositeAnimation | null = null;

    // this value is used to animate the opacity
    animatedOpacity: Animated.Value = Animated.createValue(1);

    // apply hover animation to the button
    animateHover(on: boolean): void {
        if (this.hoverAnimation) {
            this.hoverAnimation.stop();
        }
        this.hoverAnimation = Animated.timing(this.animatedOpacity,
            {
                toValue: on ? 0.5 : 1,
                duration: 320,
                easing: Animated.Easing.InOut()
            }
        );
        this.hoverAnimation.start();
    }

    setPressed(isPressed: boolean): void {
        this.setState({
            isPressed
        })
    }

    render() {
        // separate the props we handle manually and the native rx props
        const {
            type, titleStyle, upper,
            disableHoverStyle, onHoverStart,
            onHoverEnd, onPressIn, onPressOut,
            style, title, ...buttonProps
        } = this.props;
        const {isPressed} = this.state;
        const {styles, buttonTypeStyles} = createButtonStyles();

        // set the button type
        const typeStyle = buttonTypeStyles[type || 'default'] || buttonTypeStyles.default;

        // create animated style
        const animatedButtonStyle = isReactNative() || isPressed
            ? {}
            : Styles.createAnimatedViewStyle({
                opacity: this.animatedOpacity,
            });

        return (
            <RXButton
                {...buttonProps}
                style={styles.root}
                onHoverStart={(...event) => {
                    !disableHoverStyle && this.animateHover(true);
                    onHoverStart && onHoverStart(...event);
                }}
                onHoverEnd={(...event) => {
                    !disableHoverStyle && this.animateHover(false);
                    onHoverEnd && onHoverEnd(...event);
                }}
                onPressIn={(...event) => {
                    this.setPressed(true);
                    onPressIn && onPressIn(...event);
                }}
                onPressOut={(...event) => {
                    this.setPressed(false);
                    onPressOut && onPressOut(...event);
                }}>
                <Animated.View
                    style={[
                        styles.buttonBase,
                        optionalStyle(isPressed, styles.buttonPressed),
                        typeStyle.button,
                        animatedButtonStyle,
                        style
                    ]}>
                    <Text style={[
                        styles.text,
                        typeStyle.text,
                        titleStyle
                    ]}>
                        {
                            upper
                                ? title!.toUpperCase()
                                : title
                        }
                    </Text>
                </Animated.View>
            </RXButton>
        )
    }
}

export default Button;

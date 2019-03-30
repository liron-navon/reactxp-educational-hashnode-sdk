import React from 'react';
import {
    View,
    Styles,
    Types,
} from 'reactxp';
import theme from '../../theming/theme';

// the prop types for the button
interface CardProps extends Types.ViewProps {
}

/** A simple card component, used to help defining the layout */
const Card = (props: CardProps) => {
    const cardStyle = Styles.createViewStyle({
        padding: theme.spacing,
        margin: theme.spacing,
        borderRadius: theme.borderRadius.roundCorners,
        backgroundColor: theme.colors.background,
        ...theme.shadow(1),
        ...theme.border
    });

    return (
        <View
            {...props}
            style={[
                cardStyle,
                props.style
            ]}>
            {props.children}
        </View>
    )
};

export default Card;

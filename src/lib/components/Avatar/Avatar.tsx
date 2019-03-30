import React from 'react';
import {
    Styles,
    Types,
    Image,
} from 'reactxp';
import theme from '../../theming/theme';

// the prop types for the avatar
interface AvatarProps extends Types.ImageProps {
}

/** A simple Avatar component, used to display a round image */
const Avatar = ({style,...imageProps}: AvatarProps) => {
    const baseStyle = Styles.createViewStyle({
        borderColor: theme.colors.primary,
        borderWidth: 2,
        borderRadius: 50
    });

    return (
        <Image {...imageProps} style={[baseStyle, style]}/>
    )
};


export default Avatar;

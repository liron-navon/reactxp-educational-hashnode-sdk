import React from "react";
import {
    TextInput as RXTextInput,
    Types,
    View,
    Text
} from 'reactxp'
import theme from '../../theming/theme';
import {createStyleSheet} from '../../utils/styleHelpers';

// the prop types for the button
interface TextInputProps extends Types.TextInputProps {
    labelStyle?: Types.TextStyle,
    label?: string
}

const TextInput = (props: TextInputProps) => {
    const styles = createStyleSheet({
        textInput: {
            height: 40,
            padding: theme.spacing,
            ...theme.border
        },
        label: {
            fontSize: 14,
            paddingBottom: theme.spacing / 2
        }
    });

    return (
        <View>
            {
                props.label &&
                <Text style={[styles.label, props.labelStyle]}>
                    {props.label}
                </Text>
            }
            <RXTextInput
                {...props}
                style={[styles.textInput, props.style]}/>
        </View>
    )
};

export default TextInput;

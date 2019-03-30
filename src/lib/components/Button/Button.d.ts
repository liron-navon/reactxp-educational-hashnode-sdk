/// <reference types="react" />
import { Types, Animated, Component } from 'reactxp';
interface ButtonProps extends Types.ButtonProps {
    /** the type of the button */
    type?: 'default' | 'primary' | 'secondary' | 'flat';
    /** extra style for the button title */
    titleStyle?: Types.StyleRuleSet<Types.TextStyle>;
    /** uppercase the title */
    upper?: boolean;
    /** disable the hover style, hover style only work on the web */
    disableHoverStyle?: boolean;
}
/** A simple button component */
declare class Button extends Component<ButtonProps> {
    state: {
        isPressed: boolean;
    };
    hoverAnimation: Types.Animated.CompositeAnimation | null;
    animatedOpacity: Animated.Value;
    animateHover(on: boolean): void;
    setPressed(isPressed: boolean): void;
    render(): JSX.Element;
}
export default Button;

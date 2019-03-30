/// <reference types="react" />
import { Types } from 'reactxp';
interface TextInputProps extends Types.TextInputProps {
    labelStyle?: Types.TextStyle;
    label?: string;
}
declare const TextInput: (props: TextInputProps) => JSX.Element;
export default TextInput;

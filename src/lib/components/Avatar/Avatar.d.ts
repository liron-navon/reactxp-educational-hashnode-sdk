/// <reference types="react" />
import { Types } from 'reactxp';
interface AvatarProps extends Types.ImageProps {
}
/** A simple Avatar component, used to display a round image */
declare const Avatar: ({ style, ...imageProps }: AvatarProps) => JSX.Element;
export default Avatar;

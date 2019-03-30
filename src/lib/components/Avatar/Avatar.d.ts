/// <reference types="react" />
import { Types } from 'reactxp';
interface AvatarProps extends Types.ImageProps {
}
/** A simple card component, used to help defining the layout */
declare const Avatar: ({ style, ...imageProps }: AvatarProps) => JSX.Element;
export default Avatar;

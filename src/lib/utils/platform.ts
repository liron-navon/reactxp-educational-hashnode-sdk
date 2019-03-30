import {Platform} from 'reactxp';

/**
 * isWeb
 */
export const isWeb = () => Platform.getType() === 'web';
/**
 * isReactNative
 */
export const isReactNative = () => !isWeb();

/// <reference types="react" />
interface RenderRootComponentOptions {
    DEV?: boolean;
    DEBUG?: boolean;
}
declare type RenderRootViewFunction = () => JSX.Element;
declare const renderRootComponent: (renderRootView: RenderRootViewFunction, options?: RenderRootComponentOptions) => () => JSX.Element;
export default renderRootComponent;

import {App, UserInterface} from 'reactxp';

interface RenderRootComponentOptions {
    DEV?: boolean,
    DEBUG?: boolean
}

type RenderRootViewFunction = () => JSX.Element

// reactxp requires control over the root view, this function binds the root view so rxp can access it
// for react native with expo, it also exports the root view as a component,
// so calling this function will return a functional react component
const renderRootComponent = (renderRootView: RenderRootViewFunction, options: RenderRootComponentOptions = {}) => {
    const {DEBUG = false, DEV = false} = options;

    App.initialize(DEBUG, DEV);
    const rootView = renderRootView();
    UserInterface.setMainView(rootView);

    return () => rootView;
};

export default renderRootComponent;

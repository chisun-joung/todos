/**
 * Created by csjoung on 2017. 1. 6..
 */
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import todoApp from './reducers';


const configureStore = () => {
    const middlewares=[promise];
    if(process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    return createStore(
        todoApp,
        applyMiddleware(...middlewares)
    );
};

export default configureStore;

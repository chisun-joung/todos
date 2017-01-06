/**
 * Created by csjoung on 2017. 1. 6..
 */
import { createStore } from 'redux';
import throttle  from 'lodash/throttle';
import todoApp from './reducers';
import { saveState, loadState } from './localStorage';

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(todoApp, persistedState);

    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos
        });
    }, 1000));
    return store;
};

export default configureStore;

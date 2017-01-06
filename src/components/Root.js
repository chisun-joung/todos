/**
 * Created by csjoung on 2017. 1. 6..
 */
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';

const Root = ({store}) => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default Root;
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import TaskReducer from './store/reducers/task';

const rootReducer = combineReducers({
    task: TaskReducer
});

const store = createStore(rootReducer);

const app = ( 
    <Provider store={store}>
        <Suspense fallback={'<div>Loading .... </div>'}>
            <App/>
        </Suspense>
    </Provider>
 );

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

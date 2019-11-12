import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Redux
import { Provider } from 'react-redux';
// import configureStore from './configureStore';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import rootSaga from './rootSaga';
// Style
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    createReducer(),
    initialState,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
// Watcher
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

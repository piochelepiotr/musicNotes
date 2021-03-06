import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import RootReducer from './reducers/index'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/partition";


const sagaMiddleware = createSagaMiddleware();

// const reduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

var store;
if (window.navigator.userAgent.includes('Chrome')) {
    store = createStore(
            RootReducer,
            compose(
                applyMiddleware(sagaMiddleware),
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                )
            );
} else {
    store = createStore(
            RootReducer,
            compose(
                applyMiddleware(sagaMiddleware)
                )
            );
}

// const store = createStore(
//     RootReducer,
//     compose(applyMiddleware(sagaMiddleware), reduxDevTools)
//     );
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
        <Provider store={store}>
        <App />
        </Provider>
        , document.getElementById('root'));
registerServiceWorker();

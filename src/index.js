import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './saga/saga';

import thunkMiddleware from 'redux-thunk'

const sagaMiddleware = createSagaMiddleware();

let store = createStore(reducer, applyMiddleware(sagaMiddleware, thunkMiddleware));

sagaMiddleware.run(rootSaga);


ReactDOM.render(<BrowserRouter>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </BrowserRouter>,
                document.getElementById('root'));
                registerServiceWorker();

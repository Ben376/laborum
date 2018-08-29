import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import combinedReducer from './reducers/index';

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './saga/sagaFetchDisplay';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['persistIdDisplay'],
  };
  
const persistedReducer = persistReducer(persistConfig, combinedReducer);
let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);


ReactDOM.render(
                    <Provider store={store}>
                        <PersistGate persistor={persistor} >
                            <BrowserRouter>
                            <App />
                            </BrowserRouter>
                        </PersistGate>
                    </Provider>,
                document.getElementById('root'));
                registerServiceWorker();

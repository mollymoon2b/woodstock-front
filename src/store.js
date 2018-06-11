import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers.js';
import { watcherClciked, hasVoted } from './saga/sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watcherClciked);
sagaMiddleware.run(hasVoted);
export const action = type => store.dispatch({type});
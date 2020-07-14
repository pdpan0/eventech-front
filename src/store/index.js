import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import reducer from './ducks';

const devTools = window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,applyMiddleware(sagaMiddleware),devTools);

sagaMiddleware.run(rootSaga);

export default store;
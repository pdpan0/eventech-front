import { createStore } from 'redux';
import reducer from './ducks';

const devTools = window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer,devTools);

export default store;
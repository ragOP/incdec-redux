import root from './reducer/index';
import { createStore } from 'redux';
const store=createStore(root,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;


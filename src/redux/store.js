import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { albumReducer } from './albumReducer';

const store = createStore(albumReducer, applyMiddleware(thunkMiddleware));

export default store;

import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import thunk from 'redux-thunk';
import {TodoReducer} from "./reducers/TodoReducers"
import {myFirstReducer} from "./reducers/data"
import mySaga from './saga/AppSagas';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers ({
    Data: myFirstReducer,
    Todo: TodoReducer,
});


const initialState = {};

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware),
    applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(mySaga)


export default store
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import exampleReducer from './reducers/exampleReducer';

const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers({   
    example: exampleReducer
});


const store = createStore(
    rootReducer, middleware
);

export default store;
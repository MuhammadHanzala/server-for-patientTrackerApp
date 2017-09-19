import {EXAMPLE_TYPE} from '../actions/types';

const initialState = {};

export default function(state = initialState, action){
    switch(action.type){
        case EXAMPLE_TYPE:
            return {message: 'Hello World'};
        default:
            return state;
    }
}
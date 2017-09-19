import {EXAMPLE_TYPE} from './types';

export function example(){
    return {
        type: EXAMPLE_TYPE
    }
}
export function asyncAction(){
    return dispatch => {
        dispatch(example())
    }
}
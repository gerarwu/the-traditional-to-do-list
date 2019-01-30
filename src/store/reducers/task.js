import * as actionTypes from '../actions/actionTypes';

let initialState = {
    task: []    
}

const reducer = ( state = initialState, action ) => {    
    switch(action.type){
        
        case actionTypes.ADD_TASK:
            return {
                ...state,
                task: state.task.concat(action.newTask)
            }

        default: 
            return state;
    }
}

export default reducer;

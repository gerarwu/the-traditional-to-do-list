import * as actionTypes from "./actionTypes";

export function addTask (newTask){    
    return{
        type: actionTypes.ADD_TASK,
        newTask: newTask
    }
}


import React from 'react';
import { connect } from 'react-redux';

import Input from '../UI/Input';
import Button from '../UI/Button'
import { addTask }  from '../store/actions/task';


class TaskCreator extends React.Component{
    state = {       
        taskName: "",
        buttonDisabled: true
    }
    
    /*constructor(props){
        super(props);
        this.onChangedHandler = this.onChangedHandler.bind(this);
    }*/

    onChangedHandler = (e) => {        
        const isButtonDisabled = e.target.value.length > 0 ? false: true;
        this.setState({            
            ...this.state,

            taskName: e.target.value,
            buttonDisabled: isButtonDisabled
        })
    }

    onClickedHandler = () => {
        const taskNameCopy = this.state.taskName;
        this.setState({
            ...this.state,

            taskName: "",
            buttonDisabled: true,
        });      

        this.props.onAddTask(taskNameCopy) ;
    }

    render(){        
        return(
            <React.Fragment>
                <Input onchanged={ this.onChangedHandler } placeholder='Type your task here...' value={this.state.taskName} maxLength={"30"}/>
                <Button name='Add' onclicked={ this.onClickedHandler } disabled={this.state.buttonDisabled}  /> 
            </React.Fragment>
        );
    }
}

const mapStateToprops = (state) => {
    return {
        task: state.task
    }
}

const mapDsipatchToProps = (dispatch) =>{
    return {
        onAddTask: ( taskName )=> { dispatch(addTask(taskName)) }
    }
}

export default connect(mapStateToprops, mapDsipatchToProps)(TaskCreator);
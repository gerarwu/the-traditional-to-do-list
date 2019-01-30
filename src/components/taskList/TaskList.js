import React from 'react';
import { connect } from 'react-redux';
import './TaskList.css';

class TaskList extends React.Component{

    render(){
        
        let tasklist = <p> Nothing to do yet =) </p>;     

        if(this.props.task.length){                       
            tasklist = <ul className='item'> { this.props.task.map( (task, i) => <li key={i}> {task }</li> ) } </ul>;
        }

        return (
            <div className='TaskList'>                
                {tasklist}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        task: state.task.task
    }
};

export default connect(mapStateToProps, null)(TaskList);


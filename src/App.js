import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';

const TaskCreatorLazy = React.lazy(()=> {
    return new Promise( (success, error)=> {
        setTimeout(()=>{ success(import('./components/TaskCreator')) }, 5000)
    });
} );
const TaskListLazy = React.lazy(()=> import('./components/taskList/TaskList'));

class App extends Component {
  render() {    
    return (
      <div className="App">
          <Menu />
          <TaskCreatorLazy/>
          <TaskListLazy/>
      </div>
    );
  }
}

export default App;

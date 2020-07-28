import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tasklist from './components/TaskList'
import TasklistContextProvider from "./context/TakListContext"
import TaskForm from './components/TaskForm'
import Header from "./components/Header"


function App() {
  return (
    <TasklistContextProvider>
        <div className="App"> 
           <Header/>
             <TaskForm  className="taskform" />
            <Tasklist   className="tasklist"/>
      
        </div>
  </TasklistContextProvider>
  );
}

export default App;

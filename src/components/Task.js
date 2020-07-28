import React,{useContext} from 'react'
import {TaskListContext} from '../context/TakListContext'
import './Task.css'

function Task({task}) {

    const {removeTask,findItem}=useContext(TaskListContext)


    
    return (
        <div className="back">
            <li className="list-items">
                    
                 <div className="title">   
                    <span >
                       {task. title}
                    </span>

                </div>

                    <button onClick={()=>removeTask(task.id)} className="btn-delete">
                    <i className="fas fa-trash-alt"></i>

                    </button>
                    <button onClick={() => findItem(task.id)} className="btn-edit">
                        <i className="fas fa-pen"></i>

                    </button>


            </li>
        </div>
    )
} 

export default Task

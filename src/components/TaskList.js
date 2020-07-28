import React,{useContext} from 'react'
import TaskListContextProvider, {TaskListContext} from "../context/TakListContext"
import Task from './Task.js'


function TaskList() {
    
    const {tasks} =  useContext(TaskListContext)
    return (
        <div>
            {tasks.length ?(
                 <ul  className="list">
                 {tasks.map(task=>{

                     return(
                         <Task task={task} key={task.id}/>
                     )
                 })}



             </ul>
     


            ):(
                <div>
                        No Tasks
                    </div>
            )}
               
       
       
        </div>
    )
}

export default TaskList

import React,{useContext,useState,useEffect} from 'react'
import {TaskListContext} from '../context/TakListContext'
import './TaskForm.css'


const TaskForm = () => {

        const {addTask,clearList,editItem,editTask} = useContext(TaskListContext)
        

        const[title,setTitle]=useState("")
   
   
        const handleSubmit =(e)=>
            {
            
                e.preventDefault();

                if(editItem === null){
                    addTask(title);
                    setTitle('');
                }else{
                    editTask(title,editItem.id)
                }
              
            }

            const handlechange =(e)=>
            {
                e.preventDefault();
                setTitle(e.target.value)
                console.log(title)

            }

            useEffect(() => {
                if(editItem )
                {
                    setTitle(editItem.title);
                    console.log(editItem)
                }
                else
                {
                    setTitle('')
                }
                
            }, [editItem])
             

   
        return (
        <div>
           
                <form onSubmit={handleSubmit} className="form">
                    
                <div className="input-field" >
                        <input
                        type="text"
                        placeholder="Add Task"
                        value={title}
                        className="task_input"
                        onChange={handlechange}
                        required
                        />
                </div>


                <div className="buttons">   
                        
                        <div className='add-tsk' >
                            <button type="submit" classname="add-task">
                            {editItem ? "Edit Task": "Add Task" }

                            </button>

                         </div>
                            <button type="submit" onClick={clearList} classname="clear-task">
                                clear Task

                            </button>

                </div>
                    
                </form>
            
        </div>
    )
}

export default  TaskForm

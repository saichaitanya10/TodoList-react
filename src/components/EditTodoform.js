import React, {useState} from 'react'

export const EditTodoform = ({editTodo, task}) => {
    const[value, setValue] = useState(task.task);

    function handlesubmit(e) {
        e.preventDefault();

        editTodo(value, task.id);

        setValue("");
    }
  return (
    <form className='Todoform' onSubmit={handlesubmit}> 
        <input type="text" className='todo-input' value={value}
        placeholder='Update Task' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>
            Update Task
        </button>
        </form>
  )
}

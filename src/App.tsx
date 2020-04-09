import React, { useState } from 'react';
import { TextBox } from './TextBox';
import { ItemsLeft } from './ItemsLeft';
import { FilterButton } from './FilterButton';
import { Button } from './Button';
import './style.css';
import { ListItem } from './ListItem';


function App() {
  const ALL:string = 'All';
  const ACTIVE:string = 'Active';
  const COMPLETED:string = 'Completed';
  const CLEAR_COMPLETED:string = 'Clear completed';
  
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [displayStatus,setDisplayStatus] = useState<string>(ALL);


  const addTask: addTask = (taskContent) => {
    taskContent && setTasks([...tasks, {
      id: 'task' + tasks.length,
      content: taskContent,
      isCompleted: false
    }]);
  }

  const deleteCompleted = () =>{
    setTasks(tasks.filter((task)=> task.isCompleted === false ));
  }

 const updateTaskDisplayStatus = (status:string) =>{
    setDisplayStatus(status);
  }

  const editListItem = (text: string, id: string) => {
    let editedTaskIndex: number = tasks.findIndex(task => task.id === id);
    tasks[editedTaskIndex].content = text;
    setTasks(tasks);
  }

  const checkCheckBox: CheckCheckBox = (id) => {
    const checkBoxIndex: number = tasks.findIndex(task => task.id === id);
    tasks[checkBoxIndex].isCompleted = !tasks[checkBoxIndex].isCompleted;
    setTasks(tasks);
  }

  const deleteTask: CheckCheckBox = (id) => {
    const deletedTaskIndex: Array<Task> = tasks.filter(task => task.id !== id);
    setTasks(deletedTaskIndex);
  }

  return (
    <div className='toDoList'>
      <h1>TO DO LIST</h1>
      <TextBox textBox={{ addTask: addTask }} />
      <div className='listItemContainer' >
        {(displayStatus === ALL ? tasks
        :displayStatus === ACTIVE ? tasks.filter((task) => task.isCompleted === false)
        :tasks.filter((task) => task.isCompleted)).map((task, index) => 
       <ListItem
        key={task.id}
        onEdit={editListItem}
        listItem={task}
        checkCheckBox={checkCheckBox}
        deleteTask={deleteTask}/>
        )}
      </div>
      <div className='footer'>
        <ItemsLeft numberOfTasks={tasks.length} />
        <FilterButton
          value={ALL}
          onClick={updateTaskDisplayStatus}
          status={displayStatus}
        />
        <FilterButton
        value = {ACTIVE}
        onClick={updateTaskDisplayStatus}
        status={displayStatus}
         />
        <FilterButton
        value = {COMPLETED}
        onClick={updateTaskDisplayStatus} 
        status={displayStatus}
        />
         <Button
        value = {CLEAR_COMPLETED}
        onClick={deleteCompleted} />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { TextBox } from './TextBox';
import { ItemsLeft } from './ItemsLeft';
import { FilterButton } from './FilterButton';
import { ClearButton } from './ClearButton';
import './style.css';
import { ListItem } from './ListItem';


const App: React.FC = () => {
  const ALL: string = 'All';
  const ACTIVE: string = 'Active';
  const COMPLETED: string = 'Completed';
  const STATUSES: Array<string> = [ALL, ACTIVE, COMPLETED];
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [displayStatus, setDisplayStatus] = useState<string>(ALL);


  const addTask = (taskContent: string): void => {
    taskContent && setTasks([...tasks, {
      id: 'task' + tasks.length,
      content: taskContent,
      isCompleted: false
    }]);
  }

  const getTasks = (): Array<Task> => {
    return displayStatus === ALL ? tasks
      : displayStatus === ACTIVE ? tasks.filter((task) => task.isCompleted === false)
        : tasks.filter((task) => task.isCompleted)
  }

  const deleteCompleted = (): void => {
    setTasks(tasks.filter((task) => task.isCompleted === false));
  }

  const updateTaskDisplayStatus = (status: string): void => {
    setDisplayStatus(status);
  }

  const editListItem: OnEdit = (text, id) => {
    let editedTaskIndex: number = tasks.findIndex(task => task.id === id);
    tasks[editedTaskIndex].content = text;
    tasks[editedTaskIndex].isCompleted = false;
    setTasks(tasks);
  }

  const checkCheckBox: OnCheck = (id) => {
    const checkBoxIndex: number = tasks.findIndex(task => task.id === id);
    tasks[checkBoxIndex].isCompleted = !tasks[checkBoxIndex].isCompleted;
    setTasks(tasks);
  }

  const deleteTask: OnClick = (id) => {
    const deletedTaskIndex: Array<Task> = tasks.filter(task => task.id !== id);
    setTasks(deletedTaskIndex);
  }

  return (
    <div className='toDoList'>
      <h1>TO DO LIST</h1>
      <TextBox onSubmit={addTask} />
      <div className='listItemContainer' >
        {getTasks().map((task, index) =>
          <ListItem
            key={task.id}
            onChange={editListItem}
            task={task}
            onCheck={checkCheckBox}
            onDelete={deleteTask} />
        )}
      </div>
      <div className='footer'>
        <ItemsLeft numberOfTasks={tasks.length} />
        {STATUSES.forEach((status: string): void => {
          <FilterButton
            value={status}
            onClick={updateTaskDisplayStatus}
            status={displayStatus}
          />
        })}
        <ClearButton
          onClick={deleteCompleted} />
      </div>
    </div>
  );
}

export default App;

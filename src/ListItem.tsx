import React, { useState, ChangeEvent } from 'react';

interface ListItemProps {
  task: Task;
  onCheck: OnCheck;
  onDelete: OnCheck;
  onChange: OnEdit;
}

export const ListItem: React.FC<ListItemProps> = (props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(props.task.isCompleted);
  const [isDisable,setIsDisable] = useState<boolean>(true);
  const [text,setText] = useState<string>(props.task.content);
  
  const handleCheck = () => {
    props.onCheck(props.task.id);
    setIsDone(!isDone);
  }

  const handleDoubleClick = () =>{ 
    if(isDisable){
      setIsDisable(false);
      setIsDone(false);
    }else{
     text ? props.onChange(text,props.task.id) : deleteItem();
     setIsDisable(true);
     setIsDone(false);
    }
  }
  const deleteItem = () =>{
    props.onDelete(props.task.id);
  }

  const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
    setText(event.target.value);
  }

  return (
    <div 
      onMouseEnter = {() => setIsHovered(true)}
      onMouseLeave = {() => setIsHovered(false)}
      onDoubleClick = {handleDoubleClick}
      className = 'listItem'
      id={props.task.id} >
      <input 
      onClick = {handleCheck} 
      type='checkbox'  
      checked = {isDone} />
      <input
      onChange = {handleChange}
      className = {(isDone && isDisable ? 'line-through ' :'')
      +(isDisable ? 'taskUneditable' :'taskContent') }
      type='text'
      readOnly = {isDisable}
      value = {text}/>

      <input onClick = {deleteItem}  
      className = {'deleteButton ' + (!isHovered ? 'hidden' : '')} 
      type='button' value='x' />
    </div>
  );
};

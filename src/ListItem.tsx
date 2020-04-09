import React, { useState, ChangeEvent } from "react";

interface ListItemProps {
  listItem: Task;
  checkCheckBox: CheckCheckBox;
  deleteTask:CheckCheckBox;
  onEdit:onEdit;
}

export const ListItem: React.FC<ListItemProps> = (props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(props.listItem.isCompleted);
  const [isDisable,setIsDisable] = useState<boolean>(true);
  const [text,setText] =useState<string>(props.listItem.content);
  
  const handleCheck = () => {
    props.checkCheckBox(props.listItem.id);
    setIsDone(!isDone);
  }

  const handleDoubleClick = () =>{ 
    if(isDisable){
      setIsDisable(false);
    }else{
     text ? props.onEdit(text,props.listItem.id) : deleteItem();
     setIsDisable(true);
    }
  }
  const deleteItem = () =>{
    props.deleteTask(props.listItem.id);
  }

  const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
    setText(event.target.value);
  }

  return (
    <div onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDoubleClick = {handleDoubleClick}
      className='listItem'
      id={props.listItem.id} >
      <input onClick={handleCheck} type='checkbox'  checked = {isDone} />

      <input
      onChange={handleChange}
      className={(isDone && isDisable ? 'line-through ' :'')
      +(isDisable ? 'taskUneditable' :'taskContent') }
      type='text'
      readOnly={isDisable}
      value={text}/>

      <input onClick ={deleteItem}  
      className={'deleteButton ' + (!isHovered ? 'hidden' : '')} 
      type='button' value='x' />
    </div>
  );
};

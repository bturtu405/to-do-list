import React, { useState } from 'react';

interface ItemsLeftProps{
  numberOfTasks: number; 
}

export const ItemsLeft: React.FC<ItemsLeftProps>= ({numberOfTasks}) => {
 
  const showNumberOfTasks = (): string =>{
    return !numberOfTasks ? 'Nothing to do'
    : numberOfTasks === 1 ? '1 task'
    : numberOfTasks > 13 ? 'fookin busy!!'
    : numberOfTasks + ' tasks left'
  }

  return (
   <label className = 'itemsLeft' >{showNumberOfTasks()}</label>
  );
};

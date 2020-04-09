import React, { useState } from "react";

interface ItemsLeftProps{
  numberOfTasks: number; 
}

export const ItemsLeft: React.FC<ItemsLeftProps>= (props) => {
  return (
   <label className = "itemsLeft" >{props.numberOfTasks} tasks</label>
  );
};

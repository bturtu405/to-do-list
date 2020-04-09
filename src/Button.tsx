import React, { useState } from "react";

interface ButtonProperty{
  onClick:onClick;
  value:string;
}

export const Button: React.FC<ButtonProperty> = ({onClick,value}) => {

  const handleClick = () => {
    onClick(value);
  }

  return (
   <input onClick={handleClick} className='clearCompletedButton' value={value} type="button"/>
  );
};
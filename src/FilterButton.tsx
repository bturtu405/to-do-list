import React, { useState } from "react";

interface FilterButtonProperty{
  onClick:onClick;
  value:string;
  status:string;
}

export const FilterButton: React.FC<FilterButtonProperty> = ({onClick,value,status}) => {


  const handleClick = () => {
    onClick(value);
  }

  return (
   <input onClick={handleClick} 
    className={(status===value ? 'chosen':'filterButton')}
    value={value} type="button"/>
  );
};

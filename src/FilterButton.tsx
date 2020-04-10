import React from 'react';

interface FilterButtonProperty {
  onClick: OnClick;
  value: string;
  status: string;
}

export const FilterButton: React.FC<FilterButtonProperty> = (props) => {


  const handleClick = (): void => {
    props.onClick(props.value);
  }

  return (
    <input onClick = {handleClick}
      className = {(props.status === props.value ? 'chosen' : 'filterButton')}
      value = {props.value} type = 'button' />
  );
};

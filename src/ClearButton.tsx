import React from 'react';

interface ClearButtonProperty {
  onClick: OnClickClearButton;
}

export const ClearButton: React.FC<ClearButtonProperty> = ({ onClick }) => {
  const CLEAR_COMPLETED: string = 'Clear completed';
  const handleClick = () => {
    onClick();
  }

  return (
    <input
      onClick = {handleClick}
      className = 'clearCompletedButton'
      value = {CLEAR_COMPLETED}
      type = 'button' />
  );
};
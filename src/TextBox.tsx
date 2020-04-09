import React, { useState, ChangeEvent } from 'react';

interface TextBoxProps {
  onSubmit: OnSubmitTextBox;
}

export const TextBox: React.FC<TextBoxProps> = ({ onSubmit }) => {
  const [text, setText] = useState<string>('');

 const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }

  const handleSubmit = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if(event.key === 'Enter'){
    onSubmit(text);
    setText('');
    }
  }

  return (
    <input  onKeyDown = {handleSubmit}
     onChange = {handleChange} 
     value = {text} 
     className = 'textBox' 
     type = 'text' />
  );
};

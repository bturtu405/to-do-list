import React, { useState, ChangeEvent } from 'react';

interface TextBoxProps {
  textBox: TextBox;
}

export const TextBox: React.FC<TextBoxProps> = ({ textBox }) => {
  const [text, setText] = useState<string>('');

 const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }

  const handleSubmit = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if(event.key === 'Enter'){
    textBox.addTask(text);
    setText('');
    }
  }

  return (
    <input  onKeyDown = {handleSubmit}
     onChange={handleChange} 
     value={text} 
     className='textBox' 
     type='text' />
  );
};

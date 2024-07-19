import React, { useState } from 'react';
import './input.css';
import { TiDelete } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";

export interface InputProps {
    type?: 'text' | 'number';
  label?: string;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean
      /**
   * reset button 
   */
    clearable?: boolean;
      /**
   * search button
   */
    search?: boolean;
}

export const Input = ({
    type='text',
    label,
    defaultValue,
    placeholder,
    disabled = false,
    clearable = false,
  search=false,
  ...props
}: InputProps) => {
    const [inputValue, setInputValue] = useState<string>(defaultValue ?? '');

    const resetButtonClickHandler = () => {
        setInputValue('');
    }
    
    const searchButtonClickHandler = () => {
        console.log(inputValue);
    }

    return (
        <div className='storybook-input-wrapper'>
           {label && <span className='storybook-input-label'>{ label}</span>}
            <input
            className='storybook-input'
            type={type}
            value={inputValue}
            placeholder={placeholder}
            disabled={disabled}
            onChange={e=>setInputValue(e.target.value)}
            {...props}
            />
            {clearable && <TiDelete className={!search?'storybook-input-suffix-icon':'storybook-input-pre-suffix-icon'} onClick={resetButtonClickHandler}/>}
            {search && <IoIosSearch className='storybook-input-suffix-icon' onClick={searchButtonClickHandler}/>}
       </div>
  )
};

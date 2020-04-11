import React from 'react';
import './SearchBoxComponent.css';

export const SearchBoxComponent = ({placeholder,handleOnChange}) =>
<input
className = 'onChange'
type = 'search'
placeholder = {placeholder}
onChange = {handleOnChange}
/>
    

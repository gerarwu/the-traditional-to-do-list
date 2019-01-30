import React from 'react';
import './Input.css'

const input = (props) => <input 
                            type='input' 
                            value={props.value} 
                            placeholder={props.placeholder} 
                            onChange={props.onchanged} 
                            maxLength={props.maxLength}
                            className='Input' />;

export default input;
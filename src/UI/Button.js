import React from 'react';
import './Button.css';

const button = (props) => <button onClick={props.onclicked} className='Button' disabled={props.disabled} >{props.name}</button>;

export default button;


import React from 'react';
import './Icons.css'
import { AiFillCaretRight} from "react-icons/ai";
import { AiFillInteraction} from "react-icons/ai";
import {AiOutlinePauseCircle} from "react-icons/ai";



//icons start-pause and reset
const icon = (props) => {

    return (
        <div className='icons'>
            <AiFillCaretRight id="start_stop" color='yellow' size='60px'  onClick={props.start} />
            <AiOutlinePauseCircle color='white' size='90px' onClick={props.start} />
            <AiFillInteraction id="reset" color='yellow' size='55px' onClick = {props.reset} /> 
        </div>
    )
}

export default icon
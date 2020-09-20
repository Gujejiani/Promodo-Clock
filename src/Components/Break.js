import React from 'react';
import './Break.css'
import { AiOutlineArrowUp} from "react-icons/ai";
import { AiOutlineArrowDown} from "react-icons/ai";
//here i got clikable Components to control break and it's length

const breakElements = (props) =>{
    return(
        <div className="arrows">
<label id='break-label'>Break Length</label>
<label id='session-label'>Session Length</label>



<AiOutlineArrowDown onClick={props.click}  id="break-decrement" size='40px' color='green'/> 
{/* elements for decrement and increment break  */}
    {/* <label id="break-length" value={props.value} >{props.breakState}</label> */}
<AiOutlineArrowUp onClick={props.clickInc} id="break-increment"  size='40px' color='green'/>



<AiOutlineArrowDown onClick={props.sessionDecClick} id="session-decrement" size='40px' color='green'/>
{/* elements for increment and decrement  session */}
{/* <label id="session-length">{props.sessionLength}</label> */}
<AiOutlineArrowUp  onClick={props.SessionIncClick} id="session-increment" size='40px' color='green'/>
        </div>
    )
}

export default breakElements
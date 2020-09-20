import React from 'react';
import './Timer.css';


function Timer(props){
    
   


 
   
    return (
        <div className='timerZone'>

    <label id='timer-label' style={props.style}> Session   </label>

 <div className="breakArowAp" id="one">
 <label id="break-length" value={props.value} >{props.breakState}</label>
 </div>

 <div className="breakArowAp" id="sesTwo">
 <label id="session-length">{props.sessionLength}</label>
 </div>

    <span className="time" id="time-left" value={props.timer} style ={props.style}> {props.timer} </span>
   
    <label></label>
        </div>
    )
}

export default Timer;
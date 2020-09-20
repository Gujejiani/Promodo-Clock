import React from 'react';
import Break from './Components/Break';
import './App.css';
import Timer from './Components/Timer';
import Icons from './Components/Icons';

class  App extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
      

      breakLength: 5,
      sessionLength: 25,
      time: 1500,
      start: false,
      timeColor: {color: 'white'}
    }
    this.url = "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";
    this.audio = new Audio(this.url);
  }
    decrementBreakHAndler = () =>{
  
  if(this.state.breakLength > 1 && !this.state.start){
    this.setState({
      breakLength: this.state.breakLength -1
      //whith this I decrementing the break
    })
    
    }
   
}
incrementBreakHAndler = () => {
  //whith this I incrementing the break
  if(this.state.breakLength <60 && !this.state.start){
    this.setState({
      breakLength: this.state.breakLength +1
      //whith this I decrementing the break
    })
    }
    
 
}


incrementSessionHandler = () =>{
if(this.state.time < 3600 && !this.state.start){
 
this.setState({
  sessionLength: this.state.sessionLength + 1,
  time: this.state.time + 60
  //whith this i incrementing the session length by + 1  and incrementing timer by one minute
})
}
console.log("time to timehill " + this.state.time)
}

sessionDecHandler = () =>{
   if(this.state.time > 0 && !this.state.start && this.state.sessionLength > 1){
     this.setState({
       sessionLength: this.state.sessionLength - 1,
       time: this.state.time - 60
       //whith this I decrementing the session length by + 1  and decrementing timer by one minute
     })
     }
    console.log("heyy why I am not clicked???")
}





startTimer(){
  //let status = this.state.start
if(this.state.time>0 && this.state.start ) {
  this.setState({
    
    time: this.state.time - 1
  })
}
if(this.state.time < 60 && this.state.start){
  this.setState({
    timeColor: {color: 'red'}
  
  })
  this.audio.play()
}else{
  this.setState({
    timeColor: {color: 'white'}
    
  })
  this.audio.pause()
  if(this.state.start){
    this.setState({})
  }
}

if(this.state.time ===0){
  console.log("noriko you are so sweet")
  document.getElementById('timer-label').textContent="Break"
  this.setState({
    time: this.state.breakLength * 60
  })

  }else if(this.state.time < 60){
    this.setState({
      timeColor: {color: 'red'}
    })
  }else if(this.state.time ===1){
    console.log("xexe")
    this.setState({
      start: false
    })
  }


}




startedHandler = ()=>{
  // start and pause handler
  let truOrFalse = this.state.start
  console.log('start')
  
    this.setState({
      start: !truOrFalse
    })
  
  console.log("start " + this.state.start)
}

resetHandler = () =>{
  console.log('am reseted')
  this.setState({
    time: 1500,
    breakLength: 5,
    sessionLength: 25,
    start: false,
    timeColor: {color: 'white'}
  })
  document.getElementById("timer-label").textContent ="Session"
  
}



componentWillUnmount(){
  console.log('state ' + this.state.time)
  clearInterval(this.myInterval)
}

  render(){
 console.log(this.state.time)
  
 const children = (remainingTime) => {
     const hours = Math.floor(remainingTime / 3600)
     let minutes = Math.floor(remainingTime / 60)
     let seconds = remainingTime - minutes * 60
     seconds = seconds < 10 ? '0' + seconds : seconds;
     minutes = minutes < 10 ? '0' + minutes : minutes;
     return `${minutes} : ${seconds}`
    
   }
   let realTime = children(this.state.time)
  
 
let audio =[
  
  {src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"}
];
//console.log(audio[0].src)
this.url = "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";
//console.log(document.getElementById("beef"))

  return ( 
    <div className="App">
      <audio id="beef" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"/>
      <h1  >Promodo clock</h1>
      
      <Break  SessionIncClick={this.incrementSessionHandler}
       clickInc={this.incrementBreakHAndler} click={this.decrementBreakHAndler} sessionDecClick={this.sessionDecHandler}/>

      <Timer timer={realTime} style={this.state.timeColor} breakState={this.state.breakLength}  sessionLength={this.state.sessionLength}/>

      <Icons start={this.startedHandler} reset ={this.resetHandler} value={this.state.breakLength}/> 

    </div>
  );
}

componentDidMount(){
  

  this.myInterval = setInterval(()=> {
    if(this.state.start){
      this.startTimer()

    }
    
  }, 1000)
  
}

}

export default App;
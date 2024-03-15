import { useState } from 'react'

const Statistics = (props) => {
  //console.log(props)
  // Calculate sum
  const sum = props.good + props.bad + props.neutral
  //console.log(sum)
  const average = sum
  // TODO: average calculation variable const avg = sum
  return(
    <p>
      Good {props.good}  
      <br></br>
      Neutral {props.neutral} 
      <br></br>
      Bad {props.bad}
      <br></br>
      All {sum}
      <br></br>
      Average 
    </p>
  )
}


const App = () => {
  // My own additions
  
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Button handlers 
  const handleGoodClick = () => {
    setGood(good + 1) //Note to self, the setGood function needs to be within the function where the variables are originally defined
    console.log("Good: ",good)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral)  // No math needed since +0 
    //Note to self, the setGood function needs to be within the function where the variables are originally defined
    console.log("Neutral: ",neutral) 
  }
  const handleBadClick = () => {
    setBad(bad - 1) 
    //Note to self, the setGood function needs to be within the function where the variables are originally defined
    console.log("Bad: ",bad) 
  }


  return (
    <div>
      <h1> Give Feedback </h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <h1> Statistics </h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>

      
    </div>
  )
}

export default App
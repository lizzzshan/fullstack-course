import { useState } from 'react'

const Statistics = (props) => {
  //console.log(props)
  // Calculate sum
  const sum = props.good + props.bad + props.neutral
  //console.log(sum)
  const average = sum
  console.log("total", props.total)
  // Only return if feedbak is given
  if (props.total == 0){
    return(
      <p> No feedback given</p>
    )
  }
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
      Average {sum / props.total}
    </p>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //adding total num of clicks variable to calculate the average
  const [total, setTotal]= useState(0)

  // Button handlers 
  const handleGoodClick = () => {
    setGood(good + 1) //Note to self, the setGood function needs to be within the function where the variables are originally defined
    setTotal(total+1)
    console.log("Good: ",good)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral)  // No math needed since +0 
    //Note to self, the setGood function needs to be within the function where the variables are originally defined
    console.log("Neutral: ",neutral) 
    setTotal(total+1)
  }
  const handleBadClick = () => {
    setBad(bad - 1) 
    //Note to self, the setGood function needs to be within the function where the variables are originally defined
    console.log("Bad: ", bad) 
    setTotal(total+1)
  }


  return (
    <div>
      <h1> Give Feedback </h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <h1> Statistics </h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} total = {total}/>

      
    </div>
  )
}

export default App
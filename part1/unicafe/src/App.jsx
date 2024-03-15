import { useState } from 'react'
const StatisticLine = (props) => {
  console.log(props)
  // Add percentage sign if positive text
  if(props.text == "Positive"){
    return(
      <div>
        <td><tr> {props.text}: {props.value} % </tr></td> 
      </div>
    )
  }
  return(
    <div>
      <td><tr>{props.text}: {props.value} </tr></td>
    </div>
  )
}
const Statistics = (props) => {
  //console.log(props)
  // Calculate sum
  const sum = props.good + props.bad + props.neutral
  //console.log(sum)
  const average = ((props.good) + (props.bad * -1)) / sum
  const positive = (props.good) / sum

  // Debug - check for errors within the console log
  console.log("total", sum)
  console.log("Average", average)
  console.log("Positive", positive)

  // Only return if feedbak is given
  if (sum == 0){
    return(
      <p> No feedback given</p>
    )
  }
  return(
    <div>
      <table>
        <body>
        <StatisticLine text="Good" value ={props.good} />
        <StatisticLine text="Neutral" value ={props.neutral} />
        <StatisticLine text="Bad" value ={props.bad} />
        <StatisticLine text="All" value ={sum} />
        <StatisticLine text="Average" value ={average} />
        <StatisticLine text="Positive" value ={positive} />
        </body>
      </table>
      
    </div>
  )
}


const App = () => {
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
    setNeutral(neutral + 1) 
    //Note to self, the setGood function needs to be within the function where the variables are originally defined
    console.log("Neutral: ",neutral) 
  }
  const handleBadClick = () => {
    setBad(bad + 1) 
    //Note to self, the setGood function needs to be within the function where the variables are originally defined
    console.log("Bad: ", bad) 
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
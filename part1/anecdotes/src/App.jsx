import { useState } from 'react'
const Statistics = (props) => {
  //console.log(props)
  return(
    <p> Has {props.votes} votes</p>
  )
}

const MaxVotes = (props) => {
  console.log(props)
  return(
    <div>
      {props.anecdotes}

      <p> Has {props.max} votes</p>
    </div>
  )
}

const Button = (props) => {
  return (
  <div>
    <button onClick={props.handleClick}>{props.text}</button>
  </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(Array(anecdotes.length).fill(0))

  const handleAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    const voteArr = [...voted] // Create copy of the vote array
    voteArr[selected] += 1
    setVoted(voteArr)
  }
  const max = Math.max(...voted)
  //console.log("Max:",max)
  //console.log(anecdotes[max])
  const max_anec = voted.indexOf(max)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      <Statistics votes={voted[selected]}/>
      <Button handleClick={handleVote} text='Vote'/>
      <Button handleClick={handleAnecdote} text='Next anecdote'/>
      <h1>Anecdote with the most votes</h1>
      <MaxVotes anecdotes={anecdotes[max_anec]} max = {max} />
    </div>
  )
}

export default App



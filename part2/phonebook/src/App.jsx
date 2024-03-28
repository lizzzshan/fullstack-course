import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) =>{
    event.preventDefault()
    //console.log('button clicked', event.target)
    
    const newPerson = {
      name: newName,
      number: newNumber
    }

    //console.log(persons.name)
    const checkName = persons.find(props => props.name.toLowerCase() === newPerson.name.toLowerCase())
    console.log(checkName)

    // If checkName is not undefined, duplicate already exists. Give an alert and do not add
    if (checkName){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      //Add new person to persons
      setPersons(persons.concat(newPerson))
      setNewName('')
    }

    //console.log(persons)

    //console.log(persons)
  }

  const handleNameChange = (event) =>{
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber } />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{newName} {persons.number}</div>
    </div>
  )
}

export default App
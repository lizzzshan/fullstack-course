import { useState } from 'react'

const Filter = ({text, value, handleNewChange}) => {
  return(
    <div>
      {text} <input value={value} onChange={handleNewChange}/>
    </div>
  )
}
// Not Needed
// const Person = (props) => {
//   //console.log(props.person[0].name)
//   // Map to the name and number to display persons obj
//   const display = props.person.map(prop => <div key ={prop.id}> {prop.name} {prop.number}</div> )
//   //console.log(display)
//   return(
//     <div>
//       {display} 
//     </div>
//   )
// }

const Persons = ({personFilter}) => {
  return(
    <div>
      {personFilter}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filterName,setFilterName] = useState('')
  
  const addName = (event) =>{
    event.preventDefault()
    //console.log('button clicked', event.target)
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    //console.log(persons.name)
    const checkName = persons.find(props => props.name.toLowerCase() === newPerson.name.toLowerCase())
    const checkNum = persons.find(props=> props.number == newPerson.number)

    // If checkName is not undefined, duplicate already exists. Give an alert and do not add
    if (checkName){
      alert(`${newName} is already added to phonebook`)
    }
    // Check if number already exists within persons obj
    else if (checkNum){
      alert(`${newNumber} already exists in the phonebook`)
    }
    else{
      //Add new person to persons
      setPersons(persons.concat(newPerson))
      // This resets the input values (I think)
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) =>{
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNewFilter = (event) => {
    setFilterName(event.target.value)
  }

  const filter = persons.map(props => props.name.toLowerCase().includes(filterName.toLowerCase()))?
  persons.filter(props => props.name.toLowerCase().includes(filterName.toLowerCase()))
  : persons
  
  const People = ({name, number,id}) => {
    return(
      <li>{name} {number} </li>
    )
  }
  const personFilter = filter.map(props => <People key ={props.id} name ={props.name} number ={props.number} id ={props.id}/>)
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter text = 'enter name' value={filterName} handleNewChange={handleNewFilter}/>
      </div>
       
      <h2>Add a new contact</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <Persons personFilter={personFilter}/>
      </div>
    </div>
  )
}

export default App
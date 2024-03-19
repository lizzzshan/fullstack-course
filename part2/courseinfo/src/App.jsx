// Modifications from part1
const Course = (prop) => {
  //console.log(prop.course.parts[1].name)
  const partInfo = prop.course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)
  
  const total = prop.course.parts.reduce((sum,currentValue) => sum + currentValue.exercises, 0)
  //console.log(total)
  
  return (
    <div>
      <h1>{prop.course.name}</h1>
      {partInfo} 
      <p>Total courses: {total}</p>
    </div>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
    ]
  }
  return <Course course={course} />
}

export default App


//{notes.map(note => 
//<Note key={note.id} note={note} />
//)}
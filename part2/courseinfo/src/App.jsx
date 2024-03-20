// 2.1 - 2.8 part here 

// // Modifications from part1
// const Course = (prop) => {
//   //console.log(prop.course.parts[1].name)
//   const partInfo = prop.course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)
  
//   const total = prop.course.parts.reduce((s,p) => s + p.exercises, 0)
//   //console.log(total)

//   return (
//     <div>
//       <h1>{prop.course.name}</h1>
//       {partInfo} 
//       <p>Total courses: {total}</p>
//     </div>
//   )
// }


import Course from './components/Course'

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const courseSection = course.map(courses =>  <Course key={courses.id} course={courses}/>)
  return (
    <div>
      <h1>Web development curriculum </h1>
       {courseSection}
    </div>
  )
}

export default App


//{notes.map(note => 
//<Note key={note.id} note={note} />
//)}
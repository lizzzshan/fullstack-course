const Header = (prop) =>{
  return (
    <h1>{prop.course}</h1>
  )
}

const Part = (prop) =>{
  return(
    <p>
      {prop.part.name} {prop.exercises}
    </p>
    
  )
}

const Content = (prop) =>{
  return(
    <div>
      <Part part={prop.parts[0]}/>
      <Part part={prop.parts[1]} />
      <Part part={prop.parts[2]} />
    </div>
  )
}


const Total = (prop) =>{
  return(
    <p><b>Total exercises in this course:</b> {prop.parts[0].exercises + prop.parts[1].exercises + prop.parts[2].exercises}</p>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App
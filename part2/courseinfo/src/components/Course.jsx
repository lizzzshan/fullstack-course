const Header = (props) => {
    // console.log(props)
    return(
        <h2>{props.header}</h2>
    )
}

const Part = (props) => {
    //console.log("Part name: ", props.part.name) // Use this to get the name of the content titles
    return (
        <div>{props.part.name} {props.part.exercises}</div>
    )
}
const Content = (props) => {
    //console.log(props.content.parts)
    // Need to map again for the sub parts vvvv
    const contentName = props.content.parts.map(elem => {return <Part key={elem.id} part={elem}/>})

    return (
        <div>
            {contentName}
        </div>
    )
}

// TODO: Implement total 
const Total = (props) => {
    //console.log(props.total)
    const exerciseTotal = props.total.reduce((s,p) => s + p.exercises, 0)
    //console.log(classTotal)

    return (
        <div>
            <b> Total of {exerciseTotal} exercises</b>
        </div>
    )
}

const Course = (props) => {
    // console.log("Header name",props.course.name)
    //console.log(props.course.parts)
    return (
        <div>
            <Header header={props.course.name}/>
            <Content content={props.course}/>
            <Total total={props.course.parts}/>
        </div>
    )
}

export default Course;
import '../App.css'

function ListItem(props){
  return <li>{props.animal}</li>
}

function List(props){
  return(
    <ul>
      {props.animals.map((animal)=>{
        return animal.startsWith("L") ? <ListItem key={animal} animal={animal}></ListItem> : null;
      })}
    </ul>
  )
}

function ListApp(){
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  
  return (
    <div>
        <h1>Animals:</h1>
        <List animals={animals}/>
    </div>
    )
}

export default ListApp
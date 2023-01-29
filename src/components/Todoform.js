import React from 'react'

class Todoform extends React.Component {
  constructor(){
    super()
    this.state = {
      task: []
    }
    this.myRef=React.createRef()
  }
addTask =(event)=>{
if (event.key === "Enter") {
  let task = this.myRef.current.value
  let tasks = this.state.task
  tasks.push(task)
  this.setState({
    task:tasks
  })
  this.myRef.current.value= ''
}}
deleteTask=(itemId)=>{
  console.log(itemId)
 this.setState({
     task: [...this.state.task].filter((item,i
     ) => i !== itemId),
   });
}

  render(){
    return(
      <><h1>Todo's</h1>
      <div>
      {this.state.task.length > 0  ? <p style={{display:'none'}}>You have no todo's left, yay!</p> : <p id ='p'>You have no todo's left, yay!</p>}
      <div>{this.state.task.map((item,i) =>
        <p key ={i} id={i} onClick={()=>this.deleteTask(i)} >{item}</p>
      )}</div>
      <label>Add a new todo:</label><br/>
      <input ref={this.myRef} type="text" onKeyPress = {this.addTask}/>
      </div>
      </>
    )
  }
}

export default Todoform

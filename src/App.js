import React from "react";
import "./App.css";

 class ToDo extends React.Component {
  render () {
      return (
      <div id="cry">
          <h1>GODWIN APP</h1>
          <h2><p>DESIGN BY INTEGRATED NIGERIA LIMITED</p></h2>
          <Form />
      </div>
      )
  }
}

class Form extends React.Component {
  constructor () {
     super()
     //initialize state
     this.state = {
          todo:'',
          time:'',
          location:'',
          todoList:[]
     }
  }
  handleSubmit = (e) => {
      e.preventDefault()
      const { todoList, todo, time, location } = this.state //destructuring
      const todoObject = {
          todo, 
          time,
          location,
      }
      todoList.push(todoObject)
      this.setState({ todoList })
  }
  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }
  render() {
      return (
          <div id="man">
              <form onSubmit={this.handleSubmit} class= "done">
                  <input name="todo" onChange={this.handleChange} placeholder="To do" />
                  <input name="time" onChange={this.handleChange} placeholder="Time" />
                  <input name="location" onChange={this.handleChange} placeholder="Location" />
                  <button type="submit"> Add</button>
              </form>
              <ol>
                  {this.state.todoList.map((item, index) => 
                  <li style={{fontFamily: "Times New Roman", width:'30%', margin:'auto', fontSize:'25px', color:"white"}}key={index}>{item.todo} & {item.time} & {item.location}</li>
                  )}
              </ol>
          </div>
      )
  }
}

export default ToDo
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      list: []
    }
  }

  valueUpdate(input) {
    this.setState({
      input: input
    })
  }

  addToList() {
    if(this.state.input){
      let listArray = this.state.list;
      listArray.push(this.state.input)
      this.setState({
        input: "",
        list: listArray
      })
    }
    else{
      alert("Nothing")
    } 
  }

  createList() {
    let list = []
    for(let i = 0; i < this.state.list.length; i++){
      list.push(<li><div>{this.state.list[i]}</div><button id={i} onClick={(e)=>this.deleteTask(e)}>Mark Complete</button></li>)
    }
    return list
  }

  deleteTask(e) {
    let listArray = this.state.list;
    listArray.splice(e.target.id, 1)
    this.setState({
      input: "",
      list: listArray
    })
  }

  render() {
    return (
      <div className="App">
        <input className="userInput" id="userInput" value={this.state.input} onChange={(e) => this.valueUpdate(e.target.value)}/>
        <button className="add_task" id="add_task" onClick={()=>this.addToList()}>Add Task</button>
        <ul>
          {this.createList()}
        </ul>
      </div>
    );
  }
}

export default App;

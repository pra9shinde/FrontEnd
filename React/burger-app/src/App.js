import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons: [
      { name: 'Pranav', age: 25},
      { name: 'Pratik', age:25, hobbies: 'Playing'}
    ]

  }

  switchNameHandler = (newName) => {
    //Dont Do this : this.state.persons[0].name = 'New Name';
    this.setState({persons: [
      { name: 'Pranav Changed', age: 25},
      { name: newName, age:25, hobbies: 'Playing'}
    ]})
  } 

  render(){
    return (
      <div className="App">
        <h1>React App!!</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Pra9')}>Switch</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Pranav!!!')} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Reading</Person>
      </div>
    );
  }
}

export default App;

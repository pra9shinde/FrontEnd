import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons: [
      { id: '1', name: 'Pranav', age: 25},
      { id: '2', name: 'Pratik', age:25}
    ],
    showPersons: false
  };

  style = {
    'border': '1px solid #ff9928',
    'padding': '10px',
    'color': '#ff9928',
    'backgroundColor': 'white',
    'borderRadius' : '10px',
    'fontSize' : '20px',
    'boxShadow' : '0 2px 3px #ff9928',
    'fontWeight' : '400',
    'letterSpacing' : '1px'
  }

  

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }; 

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons : persons
    });
  };

  render(){
    let persons = null;

   
    if(this.state.showPersons) {
      persons = (
        <div>

          {
            this.state.persons.map( (person, index) => {
              return <Person name={person.name} age={person.age} click={ () => this.deletePersonHandler(index) } key={person.id} changed={ (event) => this.nameChangedHandler(event, person.id)} /> //Always add key in component to avoid react to confuse in arrays
            })
          }

        </div>
      );
    }

    return (
      <div className="App">
        <h1>React App!!</h1>
        <button onClick={this.togglePersonsHandler} style={this.style}>Toggle Persons</button>
        { persons }
      </div>
    );
  }
}

export default App;

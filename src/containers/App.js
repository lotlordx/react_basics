import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <h1>
//         I am the new Wave, React Dev
//       </h1>
//       </header>
//     </div>
//   );
// }


class App extends Component {
  state = {
    person: [
      {id: 'i23es', name: 'Lotanna', age: 24},
      {id: 'j72gs', name: 'Jack', age: 48},
      {id: '02nx8', name: 'Valerian', age: 36},

    ],
    showPersons: true,
    toggleCounter: 0
  }

  switchNameHandler = () => {
    this.setState({
      person: [
          {
            name: 'Iyke',
            age: 24
          },
          {
            name: 'Adam',
            age: 27
          },
          {
            name: 'John',
            age: 22
          }
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    let persons = [...this.state.person]
    let getPerson = persons.find(person => person.id === id)
    getPerson.name = event.target.value
    this.setState({
      person: persons
    })
    
  }

  togglePersonHandler = () => {
    let doesShow = this.state.showPersons
    this.setState((prevState, props) =>
    {
      return {
        showPersons: !doesShow,
        toggleCounter: prevState.toggleCounter + 1
      }
    })
  }

  deletePersonHandler = (personIndex) => {
    let personToDelete = this.state.person.slice()
    personToDelete.splice(personIndex, 1)
    this.setState({
      person: personToDelete
    })
  }
  
  render() {
    let  persons = null;

    if (this.state.showPersons) {
      persons = (
      <Persons 
      person={this.state.person}
      changed={this.nameChangeHandler}
      delete={this.deletePersonHandler}/>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            React Basic App
          </h1>
          <button className="button" onClick={this.switchNameHandler}>Switch Name</button>
    <button className="button" onClick={this.togglePersonHandler}>Toggle Cards {this.state.toggleCounter}</button>
          {persons}
        </header>
        
      </div>
    );
  }
}

export default App;

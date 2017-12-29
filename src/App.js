import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    text: "Samsung" 
  }

  textChangeHandler = (event) => {
    this.setState({
      text: event.target.value
    })
  };

  deleteCharHandler = (index) => {
    const chars = [...this.state.text];
    chars.splice(index, 1);
    const text = chars.join('');

    this.setState({text: text});
  };

  render() {

    let chars = null

    chars = (
      <div>
        { [...this.state.text].map( (char, index) => {
          return (
            <CharComponent
              click = { () => this.deleteCharHandler(index) }
              char = {char}
              key = {index}
            />
          )
        })}
      </div>
    );

    return (
      <div className="App">
        <UserInput 
          changed = { this.textChangeHandler }
          text = { this.state.text }
        />
        <ValidationComponent textLength = { this.state.text.length } />
        {chars}
      </div>
    );
  }
}

export default App;

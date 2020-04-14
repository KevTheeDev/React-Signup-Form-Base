import ReactForm from './component/ReactForm'
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //onsubmit shows user input in concole
    onSubmit = displayBoxInput => { 
      console.log(`What the user just entered: ${displayBoxInput}`)
     }

  render() { 
    return ( 
      <div>
        <ReactForm onSubmit={displayBoxInput => this.onSubmit(displayBoxInput) }/>
      </div>
     );
  }
}
 
export default App;
import ReactForm from './component/ReactForm'
import React, { Component } from 'react';
import './App.css';

class App extends Component {
    onSubmit = displayInput => { 
      console.log(`What the user just entered: ${displayInput}`)
     }

  render() { 
    return ( 
      <div>
        <ReactForm onSubmit={displayInput => this.onSubmit(displayInput) }/>
      </div>
     );
  }
}
 
export default App;
import ReactForm from './component/ReactForm'
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     }
  }
  render() { 
    return ( 
      <div>
        <ReactForm />
      </div>
     );
  }
}
 
export default App;
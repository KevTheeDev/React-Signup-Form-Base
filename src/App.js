import React from 'react';
import './App.css';

class controlledCompForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      age: '',
      gender: {male: '', female: '', other: ''},
      occupation: ''
    }
  }
  render(){
  return (
    <div className="App">
      
      <form>

      </form>
    </div>
  );
}
}
export default controlledCompForm;

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
      
     <h1>REACT BASE SIGN UP FORM</h1>
     label='Username'
      <form>
        <input type='text' />
      </form>

     <label>Password</label>
      <form>
        <input />
      </form>

     <label>Age</label>
      <form>
        <input />
      </form>

     <label>Gender</label>
      <form>
        <input />
      </form>

     <label>Occupation</label>
      <form>
        <input />
      </form>

   </div>
  );
}
}
export default controlledCompForm;

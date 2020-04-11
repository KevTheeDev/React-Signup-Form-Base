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
      
     <h2>Username</h2>
      <form>
        <input />
      </form>

     <h2>Password</h2>
      <form>
        <input />
      </form>

     <h2>Age</h2>
      <form>
        <input />
      </form>

     <h2>Gender</h2>
      <form>
        <input />
      </form>

     <h2>Occupation</h2>
      <form>
        <input />
      </form>

   </div>
  );
}
}
export default controlledCompForm;

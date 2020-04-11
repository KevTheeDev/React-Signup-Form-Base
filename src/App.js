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
      
     <h1>Username</h1>
      <form></form>

     <h1>Password</h1>
      <form></form>

     <h1>Age</h1>
      <form></form>

     <h1>Gender</h1>
      <form></form>

     <h1>Occupation</h1>
      <form></form>

   </div>
  );
}
}
export default controlledCompForm;

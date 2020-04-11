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
    <div className="reactapp">
      
     <h1 className="title" >REACT BASE SIGN UP FORM</h1>

      <form>
        <label>Username</label>
        <input type='text' />
      </form>

      <form>
        <label>Password</label>
        <input type='text' />
      </form>

      <form>
        <label>Age</label>
        <input type='text' />
      </form>

      <form>
        <label>Gender</label>
        <input type='text' />
      </form>

      <form>
        <label>Occupation</label>
        <input type='text' />
      </form>

   </div>
  );
}
}
export default controlledCompForm;

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

      <form id="singupboxes">         
        <div>
          <label>Username</label>
          <input type='text' />
        </div>

        <div>
          <label>Password</label>
          <input type='text' />
        </div>

        <div>
          <label>Age</label>
          <input type='text' />
        </div>


        <div>
          <label>Gender</label>
          <input type='text' />
        </div>


        <div>
          <label>Occupation</label>
          <input type='text' />
        </div>
      </form>

    <button>Display</button>

   </div>
  );
}
}
export default controlledCompForm;

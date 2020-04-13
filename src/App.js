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
  //bind this to control for the component
  this.onInput = this.onInput.bind(this);
  }

onInput(e) {
    // (e.target.name, e.target.value);
    // I think this updates the states in the console
    this.setState({ [e.target.name]: e.target.value })
  }


  render(){
  return (
    <div className="reactapp">
      
     <h1 className="title" >REACT BASE SIGN UP FORM</h1>

      {/* used onchange to call the function that will catch the event that updates the state when text is entered in the input boxes */}
      <form onChange={this.onInput} >         
        <div>
          <label>Username</label>
          <input type='text' name="username" />
        </div>

        <div>
          <label>Password</label>
          <input type='text' name="password" />
        </div>

        <div>
          <label>Age</label>
          <input type='text' name="age" />
        </div>


        <div>
          <label>Gender</label>
          <input type='text' name="gender" />
        </div>


        <div>
          <label>Occupation</label>
          <input type='text' name="occupation" />
        </div>
      </form>

    <button onSubmit={this.onInput}> {this.state.username} Display What You've Entered</button>

   </div>
  );
}
}
export default controlledCompForm;

import React, { Component } from 'react';
import './index.css';
import Form from './components/Form';
import View from './components/View';
import Popup from './components/Popup';

class App extends Component {
  state = {
    firstname: '',
    lastname: '',
    phone: '',
    role: 'Teacher',
    message: '',
    showPopup: false
  };

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    });
  };

  popupHandler = (e) => {
    e.preventDefault();
    this.setState({
      showPopup: true
    });
  };

  render() {
    const props = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      role: this.state.role,
      message: this.state.message
    }
    return (
      <div>
        <Form change={this.inputHandler} submit = {this.popupHandler}/>
        <View {...props} />
        {this.state.showPopup && <Popup {...props}/>}
      </div>
    );
  }
}

export default App;
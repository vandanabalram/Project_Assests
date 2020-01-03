import React, { Component } from 'react';
import "./Navbar.css";
import logo from './images1.jpg';
import Modal from 'react-modal';
import RegisterPage from '../RegisterPage/RegisterPage'

import BrowserHistory from '../Utils/BrowserHistory';
class Navbar extends Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
  }

  openModal=()=> {
    this.setState({modalIsOpen: true});
  }
  closeModal=()=> {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <div>
  <div className="row navbar">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" >
                <img src={logo} className="logo"></img>
                </div>
                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7" >
                </div>
                
                <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1"style={{color:'white'}}>
                <button onClick={this.openModal}> Register</button>
                </div>
                <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1"style={{color:'white'}} >
                <button> Signin</button>
                </div>
      </div> 
      <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Register Modal"
        >
          <RegisterPage />
          
        </Modal>
      </div>
    );
  }
}

export default Navbar;

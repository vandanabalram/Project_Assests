import React, { Component } from 'react';
import HomePage from './Components/HomePage/HomePage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import Modal from './Components/Modal/Modal';

export default class App extends Component {
  render() {
    return <div className="app">
      <HomePage/>
     
    </div>
  }
}
// import React, { Component } from 'react';

// import RegisterPage from './Components/RegisterPage/RegisterPage';
// import modal from './Components/Modal/Modal';


// class App extends Component {


// 	constructor() {
// 		super();

// 		this.state = {
// 			isShowing: false
// 		}
// 	}

// 	openModalHandler = () => {
// 		this.setState({
// 			isShowing: true
// 		});
// 	}

// 	closeModalHandler = () => {
// 		this.setState({
// 			isShowing: false
// 		});
// 	}

// 	render () {
// 		return (
// 			<div>
// 				{ this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

// 				<button className="open-modal-btn" onClick={this.openModalHandler}>Register</button>

				
// 					<modal>
// 						{/* <RegisterPage/> */}
//             </modal>
// 			</div>
// 		);
// 	}
// }

// export default App;


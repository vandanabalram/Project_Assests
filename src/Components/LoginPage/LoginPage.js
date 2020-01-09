// import '../css/Loginfrom.css'
import BrowserHistory from '../Utils/BrowserHistory';
// import { success } from '../Action/Loginaction'
// import { handle } from '../Action/Registeraction'
import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { login } from '../userFunction'
class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      uerr: '',
      perr: '',
      usererr:'',
      pwdrerr:''
    }
  }
  onHandleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  onHandleClick = (e) => {
    debugger;
    e.preventDefault();
    const reqst = {
      email: this.state.email,
      password: this.state.password
    }
    login(reqst).then(res => {
      console.log(res);

      if (res === "User does not exist") {
          alert("User dose not exist")
        
      }
      else if ( res === "wrong password") {
          alert("wrong password")
        
      }
    //   else  
    //   {
    //    alert("Login successfully")
    //     BrowserHistory.push('/booknow');
    //   }
    })
    if (this.state.email.length === 0 && this.state.password.length === 0) {
      this.setState({
        uerr: "Email is required",
        perr: "Password is required"
      })
    }
    else if (this.state.email.length === 0) {
      this.setState({ uerr: "Email is required" })
    }
    else if (this.state.password.length === 0) {
      this.setState({ perr: "Password is required" })
    }
    else if (!this.state.email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/)) {
      this.setState({ uerr: "Please enter the valid email" })
    }
    else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
      this.setState({ perr: "Please enter the strong password" })
    }
    // else {
    //   // BrowserHistory.push('/booknow')
    // }

  }
  onHandleClicks = () => {
    BrowserHistory.push('/')
    // const loginDetails = { username: this.state.username, password: this.state.password };
    // this.props.submitLogin(loginDetails);
  }
  // componentWillMount() {
  //   this.props.handle();
  // }

  render() {
    return (
      <div className="login">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm1">
              {/* <p>{this.props.message}</p> */}

              <h1>Login</h1>
              <label ><b>Username</b></label><br />
              <input type="text" name="email" className="two" onChange={this.onHandleChange} /><br />
              <p>{this.state.usererr}</p>
              <p>{this.state.uerr}</p>
              <label ><b>Password</b></label><br />
              <input type="password" name="password" className="two" onChange={this.onHandleChange} /><br /><br />
              <p>{this.state.pwdrerr}</p>
              <p>{this.state.perr}</p>

              <button onClick={this.onHandleClick} className="btn2"><b>Login</b></button><a href="" onClick={this.onHandleClicks}>Cancel</a>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
            </div>
          </div>
        </div>
      </div>
    );
  }

}
// const mapStoreToProps = (state) => {
//   // const { message } = state.Loginreducer;
//   const { message } = state.Registerreducer;


//   return { message };

export default Loginform;
import React, { Component } from 'react';
class Desktop extends React.Component {
  constructor(props){
  super(props);
  this.state={
  firstname:'',
  lastname:'',
  email:'',
  password:'',
  mobile:'',
  fnameError:'',
  lnameError:'',
  emailError:'',
  passwordError:'',
  mobileError:'',
  // modal: false,login_modal: false, 
  }
  }
  handleSubmit = () => {debugger
  // const { firstname,lastname,email,password,mobile } = this.state
  // const payload = { firstname,lastname,email,password,mobile }
  
  let reg_user=/^[A-Za-z0-9]{2,10}$/;
  let reg_pwd=/^[A-Za-z0-9]{2,10}$/;
  let reg_email=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let reg_mob=/^(\+\d{1,3}[- ]?)?\d{10}$/;
  let t=0;
  if(!this.state.firstname) this.setState({fnameError:'Firstname is required'});
  else if(!reg_user.test(this.state.firstname)) this.setState({fnameError:'Invalid Firstname'});
  else{
  t++;
  this.setState({fnameError:''});
  }
  
  if(!this.state.lastname) this.setState({lnameError:'Lastname is required'});
  else if(!reg_user.test(this.state.lastname)) this.setState({lnameError:'Invalid Lastname'}); 
  else {
  t++;
  this.setState({lnameError:''});
  }
  if(!this.state.email) this.setState({emailError:'Email is required'});
  else if(!reg_email.test(this.state.email)) this.setState({emailError:'Invalid Email'}); 
  else {
  t++;
  this.setState({emailError:''});
  }
  
  if(!this.state.password) this.setState({passwordError:'Password is required'});
  else if(!reg_pwd.test(this.state.password)) this.setState({passwordError:'Invalid Password'});
  else {
  t++;
  this.setState({passwordError:''});
  }
  if(!this.state.mobile) this.setState({mobileError:'Mobile number is required'});
  else if(!reg_mob.test(this.state.mobile)) this.setState({mobileError:'Invalid Mobile number'});
  else {
  t++;
  this.setState({passwordError:''});
  }
  
  if(t>4) {
  console.log(this.state)
  // .signup(payload).then(res => {
  // this.setState({
  // firstname: '',
  // lastname: '',
  // email: '',
  // password:'',
  // mobile:''
  // })
  // console.log('hello')
  // browserHistory.push("/");
  // });
  
  } 
  }
  
  handleChange=(e)=>{
  this.setState({[e.target.name]:e.target.value});
  }
  handleSignin=()=>{
  const { email,password} = this.state;
  const payload = { email,password }
  // const signinRes = await api.signin(payload)
  // sessionStorage.setItem('authentication', signinRes.data.token)
  // sessionStorage.setItem('userEmail', signinRes.data.email)
  // .then(res => {
  // const token = res.data.token;
  // localStorage.setItem('jwtToken',token);
  // setAuthorizationToken(token);
  // })
  browserHistory.push("/title");
  }
  
  // toggle=()=> {
  // this.setState({
  // modal: !this.state.modal
  // });
  // }
  // login_toggle=()=> {
  // this.setState({
  // login_modal: !this.state.login_modal
  // });
  // }
  
  render() {
  return ( 
  <div className="body">
  
  {/ <div isOpen={this.state.modal}> /}
  <form onSubmit={this.handleSubmit} className='signup_form'> 
  <div className=" row signup_box">
  
  <div >
  <h1 className='signup_heading'>Sign up here</h1>
  <input type='text' name='firstname' onChange={this.handleChange} className='input_box' placeholder='First Name..'></input>
  <p className='red'>{this.state.fnameError}</p>
  <input type='text' name='lastname' onChange={this.handleChange} className='input_box' placeholder='Last Name..'></input>
  <p className='red'>{this.state.lnameError}</p>
  <input type='text' name='email' onChange={this.handleChange} className='input_box' placeholder='Email..'></input>
  <p className='red'>{this.state.emailError}</p>
  <input type='password' name='password' onChange={this.handleChange} className='input_box' placeholder='Password..'></input>
  <p className='red'>{this.state.passwordError}</p>
  <input type='text' name='mobile' onChange={this.handleChange} className='input_box' placeholder='Mobile Number..'></input> 
  <p className='red'>{this.state.mobileError}</p> 
  <div className="radio">
  <label className="select_one"><input type="radio" value="option1" /> Male</label>
  <label className="select_one"><input type="radio" value="option1" /> Female</label>
  <label className="select_one"><input type="radio" value="option1" /> Others</label>
  </div>
  <button type="button" onClick={this.handleSubmit} class="btn btn-success signup_btn">SIGN UP</button>
  <label className="signup_lbl">Already registered..?</label><button type="button" class="btn link_btn">Login</button> 
  </div> 
  </div>
  
  <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
  <button color="danger" onClick={this.toggle}>Cancel</button>
  
  </form>
  </div> 
  );
  }
  }
  
  export default Desktop;
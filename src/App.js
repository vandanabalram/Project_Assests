import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import './App.css';
import Dashboardpage from './Components/DashboardPage/DashboardPage';
import LoginPage from './Components/LoginPage/LoginPage';
import Navbar from './Components/Navbar/Navbar';
import AllPost from './Components/AllPost';
import PostForm from './Components/PostForm'
// import Desktop from './Components/Desktop/Desktop';
import Footer from './Components/Footer/Footer';

export default class App extends Component {
  render() {
    return <div className="app">
      <Router>
        <switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/login' component={LoginPage}></Route>
          <Route exact path='/dashboard' component={Dashboardpage}></Route>
          <Route exact path='/navbar' component={Navbar}></Route>
          <Route exact path='/footer' component={Footer}></Route>
          <Route exact path='/AllPost' component={AllPost}></Route>
          <Route exact path='/AllPost' component={PostForm}></Route>
          {/* <Route exact path='/desktop' component={Desktop}></Route> */}
          <Route exact path='/register' component={RegisterPage}></Route>



        </switch>
      </Router>
    </div>
  }
}

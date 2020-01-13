import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import './App.css';
import Dashboardpage from './Components/DashboardPage/DashboardPage';
import LoginPage from './Components/LoginPage/LoginPage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import DesktopTable from './Components/Desktop/DesktopTable';
import DesktopForm from './Components/Desktop/DesktopForm';
import LaptopTable from './Components/Laptop/LaptopTable';
import LaptopForm from './Components/Laptop/LaptopForm';
import MiscellaneousTable from './Components/Miscellaneous/MiscellaneousTable';
import MiscellaneousForm from './Components/Miscellaneous/MiscellaneousForm';



export default class App extends Component {
  render() {
    return <div className="app">
      <Router>
        <switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/login' component={LoginPage}></Route>
          <Route exact path='/register' component={RegisterPage}></Route>
          <Route exact path='/dashboard' component={Dashboardpage}></Route>
          <Route exact path='/navbar' component={Navbar}></Route>
          <Route exact path='/footer' component={Footer}></Route>
          <Route exact path='/desktoptable' component={DesktopTable}></Route>
          <Route exact path='/desktopform' component={DesktopForm}></Route>
          <Route exact path='/laptoptable' component={LaptopTable}></Route>
          <Route exact path='/laptopform' component={LaptopForm}></Route>
          <Route exact path='/miscellaneoustable' component={MiscellaneousTable}></Route>
          <Route exact path='/miscellaneousform' component={MiscellaneousForm}></Route>
        
        </switch>
      </Router>
    
    </div>

  }
} 


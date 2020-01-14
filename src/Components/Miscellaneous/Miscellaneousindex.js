import React, { Component } from 'react';
import browserHistory from '../Utils/BrowserHistory';
import './Miscellaneousindex.css';
class Miscellaneousindex extends Component {
  render() {
    return (
      <div>
      <div className="misimg">
      <button className="deskbtn" type="submit" >Desktop</button>
      <button className="lapbtn" type="submit" >Laptop</button> 
      </div>
      </div>
     
    );
  }
}

export default Miscellaneousindex;
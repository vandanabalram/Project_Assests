import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import './MiscellaneousTable.css';
import axios from 'axios';
import browserHistory from '../Utils/BrowserHistory';
import {questionHandle} from '../../Action/MiscellaneousAction'
import { connect } from 'react-redux';

class MiscellaneousTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Asset_Number: '',
      MAC_Address:'',
      Comment:''
    }
  }
  handleChangeg=(e)=>{
      this.setState({[e.target.name]:e.target.value});
  }
 
  onChangeAsset_Number=(e)=> {
      this.setState({
        Asset_Number: e.target.value
    })  
  }
  
onChangeMAC_Address=(e)=> {
    this.setState({
        MAC_Address: e.target.value
  })  
}
onChangeComment=(e)=> {
    this.setState({
    Comment: e.target.value
  })  
}
  onSubmit=(e)=> {
      e.preventDefault();
      const payload = {
        Asset_Number : this.state.Asset_Number,
     MAC_Address: this.state.MAC_Address,
     Comment: this.state.Comment,
    };
 
      this.props.questionHandle(payload);
      browserHistory.push('./miscellaneousform'); 
  }

  render() {
    const { Asset_Number,MAC_Address,Comment } = this.state 
    return (
      <div>
   
            <div className="row1">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 appth">
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
            </div>
            <div style={{ marginTop: 10 }}>
                <form onSubmit={this.onSubmit} className="apptform">
                  
                  <div>
                    <label>Asset_Number </label>
                      <input type="text" 
                        className="width"
                        value={this.state.Asset_Number}
                        onChange={this.onChangeAsset_Number}
                      />
                  </div>
                  
                  <div>
                    <label> MAC_Address</label>
                      <input type="text" 
                        className="width"
                        value={this.state.MAC_Address}
                        onChange={this.onChangeMAC_Address}
                      />
                  </div>
                  <div>
                    <label> Comment </label>
                      <input type="text" 
                        className="width"
                        value={this.state.Comment }
                        onChange={this.onChangeComment}
                      />
                  </div>
                <div className="form-group">
                    <button type="submit" value="send" className="sendbta" onClick={this.onSubmit}>Send</button>
                    <button type="submit" className="resetbta">Reset</button> 
              </div>
                </form>
      </div>
       
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  
  const {Asset_Number}=state.Desktopreducer
 
  const {MAC_Address}=state.Desktopreducer
  const {Comment}=state.Desktopreducer
  
  return {Asset_Number,MAC_Address,Comment}
  }
  export default connect(mapStateToProps,{questionHandle}) (MiscellaneousTable);
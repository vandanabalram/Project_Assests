import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import axios from 'axios';
import browserHistory from '../Utils/BrowserHistory';
import './LaptopTable.css';
export default class LaptopTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Employee_Id: '',
      Assest_Number: '',
      Name: '',
      MAC_Address:'',
      ChargerAssest_Number:'',
      Comment:''
    }
  }
  handleChangeg=(e)=>{
      this.setState({[e.target.name]:e.target.value});
  }
  onChangeEmployee_Id=(e)=> {
      this.setState({
      Employee_Id: e.target.value
    });
  }
  onChangeAssest_Number=(e)=> {
      this.setState({
        Assest_Number: e.target.value
    })  
  }
  onChangeName=(e)=> {
    this.setState({
        Name: e.target.value
  })  
}
onChangeMAC_Address=(e)=> {
    this.setState({
        MAC_Address: e.target.value
  })  
}
onChangeChargerAssest_Number=(e)=> {
    this.setState({
        ChargerAssest_Number: e.target.value
  })  
}
onChangeComment=(e)=> {
    this.setState({
    Comment: e.target.value
  })  
}
  onSubmit=(e)=> {
      e.preventDefault();
      const obj = {
     Employee_Id: this.state.Employee_Id,
     Assest_Number : this.state.Assest_Number,
     Name: this.state.Name,
     MAC_Address: this.state.MAC_Address,
     ChargerAssest_Number: this.state.ChargerAssest_Number,
     Comment: this.state.Comment,


    };
  axios.post('http://localhost:3001/appt', obj)
    .then(res => console.log(res.data));
      this.setState({
        Employee_Id: '',
        Assest_Number: '',
        Name:'',
        MAC_Address:'',
        ChargerAssest_Number:'',
        Comment:''

    })
    browserHistory.push('./laptopform');
  }

  render() {
    const {Employee_Id, Assest_Number,Name,MAC_Address,Comment } = this.state 
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
                    <label>Employee_Id</label>
                      <input 
                        type="text" 
                        className="width" 
                        value={this.state.Employee_Id}
                        onChange={this.onChangeEmployee_Id}
                    />
                  </div>
                  <div>
                    <label>Assest_Number </label>
                      <input type="text" 
                        className="width"
                        value={this.state.Assest_Number}
                        onChange={this.onChangeAssest_Number}
                      />
                  </div>
                  <div>
                    <label>Name </label>
                      <input type="text" 
                        className="width"
                        value={this.state.Name}
                        onChange={this.onChangeName}
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
                    <label> ChargerAssest_Number</label>
                      <input type="text" 
                        className="width"
                        value={this.state.ChargerAssest_Number}
                        onChange={this.onChangeChargerAssest_Number}
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
                    <button type="submit" value="send" className="sendbta" >Send</button>
                    <button type="submit" className="resetbta">Cancel</button> 
              </div>
                </form>
      </div>
       
      </div>
    )
  }
}
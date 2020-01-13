import React, { Component } from 'react';
import axios from 'axios';
import TableRowMiscellaneous from './TableRowMiscellaneous';



export default class MiscellaneousForm extends Component {

  constructor(props) {
      super(props);
      this.state = {Users: []};
    }
    componentDidMount(){
      debugger;
      axios.get('http://localhost:3001/Miscellaneous')
        .then(response => {
          debugger
          this.setState({ Users: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.Users.map(function(object, i){
          return <TableRowMiscellaneous obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          
            <div className="row1">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 schp">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
            </div>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                
                <th>Asset_Number</th>
                <th>MAC_Address</th>
                <th>Comment</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }
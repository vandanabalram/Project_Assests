import React, { Component } from 'react';
import axios from 'axios';
import TableRowMisdesk from './TableRowMisdesk';
export default class MiscellaneousDesktopForm extends Component {
  constructor(props) {
    super(props);
    this.state = { Users: [] };
  }
  componentDidMount() {
    debugger;
    axios.get('http://localhost:3001/MiscellaneousDesktop')
      .then(response => {
        debugger
        this.setState({ Users: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow() {
    return this.state.Users.map(function (object, i) {
      return <TableRowMisdesk obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div className="desktoptable">
        <p className="desk">Desktop List</p>
        <table className="table table-striped" style={{ marginTop: 60 }}>
          <thead>
            <tr>
              
              <th>Asset_Number</th>
              <th>Desktop</th>
              <th>MAC_Address</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

import './HomeScreen.sass';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleRefresh  = this.handleRefresh.bind(this);
  }

  handleRefresh() {
    if (this.props.getDevicesToStore) {
      this.props.getDevicesToStore();
    }
  }

  getDevices() {
    if (!this.props.devices) {
      if (this.props.getDevicesToStore) {
        this.props.getDevicesToStore();
      }

      return [];
    } 

    return this.props.devices;
  }

  getDeviceLink(deviceId) {
    return `/device/${deviceId}`
  }

  render() {
    return (
      <div>
        <h2>Hardware Devices</h2>
        <div className="control-panel">
          <button type="button" className="btn btn-dark" onClick={this.handleRefresh}>Refresh</button>
        </div>
        {this.getDevices().map((value, index) => {
          return (
            <div className="card" key={index}>
              <div className="card-body">
                <h5 className="card-title">{value.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{value.host}:{value.port}</h6>
                <p>
                  Description: {value.description}<br/>
                  Received Time: {value.lastUpdateReceived}
                </p>
                <LinkContainer exact={true} to={this.getDeviceLink(value.id)}>
                  <button type="button" className="btn btn-primary">Device Info</button>
                </LinkContainer>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default HomeScreen;
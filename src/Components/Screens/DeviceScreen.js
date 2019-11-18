import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';

import './DeviceScreen.sass';

class DeviceScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleRefresh  = this.handleRefresh.bind(this);
  }

  handleRefresh() {
    if (this.props.getDeviceStatusToStore) {
      this.props.getDeviceStatusToStore(this.props.match.params.id)
    }
  }

  getDeviceStatus() {
    if (!this.props.device) {
      if (this.props.getDeviceStatusToStore) {
        this.props.getDeviceStatusToStore(this.props.match.params.id)
      }

      return {};
    } 

    return this.props.device;
  }

  getDeviceHistory() {
    if (!this.props.device) {
      return [];
    } else if (!this.props.device.logEntries) {
      if (this.props.getDeviceHistoryToStore) {
        this.props.getDeviceHistoryToStore(this.props.match.params.id)
      }

      return [];
    } 

    return this.props.device.logEntries;
  }

  getTemperatureHistory() {
    return this.getDeviceHistory().map(function(element) {
      return { x: element.recordedOn, y: element.temperature };
    })
  }

  getHumidityHistory() {
    return this.getDeviceHistory().map(function(element) {
      return { x: element.recordedOn, y: element.relativeHumidity };
    })
  }

  render() {
    const device = this.getDeviceStatus();

    return (
      <div>
        <h2>Device - {device.name}</h2>
        <div className="control-panel">
          <button type="button" className="btn btn-dark" onClick={this.handleRefresh}>Refresh</button>
        </div>
        <div>
          <p>
            Host: {device.host}<br/>
            Port: {device.port}<br/>
            Description: {device.description}<br/>
            Received Time: {device.lastUpdateReceived}
          </p>
        </div>
        <Row>
          <Col xs="12" sm="6">
            <h4>Temperature (Celcius)</h4>
            <VictoryChart
              theme={VictoryTheme.material}>
                <VictoryLine
                style={{
                  data: { stroke: "#c43a31" },
                  parent: { border: "1px solid #ccc"}
                }}
                interpolation="natural"
                scale={{ x: "time", y: "linear" }}
                data={this.getTemperatureHistory()}
              />
            </VictoryChart>
          </Col>
          <Col xs="12" sm="6">
            <h4>Relative Humidity (%)</h4>
            <VictoryChart
              theme={VictoryTheme.material}>
              <VictoryLine
                style={{
                  data: { stroke: "#c43a31" },
                  parent: { border: "1px solid #ccc"}
                }}
                interpolation="natural"
                scale={{ x: "time", y: "linear" }}
                data={this.getHumidityHistory()}
              />
            </VictoryChart>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DeviceScreen;
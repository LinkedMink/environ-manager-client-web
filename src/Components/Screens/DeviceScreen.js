import React from 'react';
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
          <div className="btn-group" role="group" aria-label="Chart Selector">
            <button type="button" className="btn btn-secondary" data-target="#deviceTemperatureChart" 
              aria-expanded="false" aria-controls="deviceTemperatureChart">Temperature</button>
            <button type="button" className="btn btn-secondary" data-target="#deviceHumidityChart" 
              aria-expanded="false" aria-controls="deviceHumidityChart">Humidity</button>
          </div>
        </div>
        <div className="collapse multi-collapse" id="deviceTemperatureChart">
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
        </div>
        <div className="collapse multi-collapse" id="deviceHumidityChart">
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
        </div>
      </div>
    );
  }
}

export default DeviceScreen;
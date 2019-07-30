import { connect } from "react-redux";

import RequestHelper from "../Helpers/RequestHelper";
import DeviceScreen from "../Components/Screens/DeviceScreen";
import { saveStatus, saveLogEntries } from "../Actions/DeviceData";

function mapStateToProps (state, ownProps) {
  const foundDevice = state.deviceData.devices.find(function(element) {
    return element.id === ownProps.match.params.id;
  });
  
  return {
    device: foundDevice
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDeviceStatusToStore: deviceId => {
      const responseHandler = data => {
        return saveStatus(data);
      }

      return RequestHelper.getJsonResponse(
        dispatch, 
        `hardware-device/${deviceId}`, 
        responseHandler);
    },

    getDeviceHistoryToStore: deviceId => {
      const responseHandler = data => {
        return saveLogEntries(data);
      }

      return RequestHelper.getJsonResponse(
        dispatch, 
        `log-entry/${deviceId}`, 
        responseHandler, 
        true);
    }
  };
}

const DeviceContainer = connect(mapStateToProps, mapDispatchToProps)(DeviceScreen);

export default DeviceContainer;
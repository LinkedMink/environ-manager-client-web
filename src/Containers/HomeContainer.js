import { connect } from "react-redux";

import RequestHelper from "../Helpers/RequestHelper";
import HomeScreen from "../Components/Screens/HomeScreen";
import { saveDevices } from "../Actions/DeviceData";

function mapStateToProps (state) {
  return {
    devices: state.deviceData.devices
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDevicesToStore: () => {
      let responseHandler = data => {
        return saveDevices(data);
      }
  
      return RequestHelper.getJsonResponse(
        dispatch, 
        'hardware-device', 
        responseHandler);
    }
  };
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export default HomeContainer;
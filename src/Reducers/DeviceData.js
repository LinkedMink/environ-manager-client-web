import { SAVE_DEVICES, SAVE_STATUS, SAVE_LOG_ENTRIES } from '../Actions/DeviceData';

function deviceData(state = {}, action) {
  if (action.type === SAVE_DEVICES) {
    return Object.assign({}, state, { 
      devices: action.payload, 
    });
  } else if (action.type === SAVE_STATUS) {
    let copyDevices = state.devices.filter(function(element) {
      return element.id !== action.payload.id;
    });

    copyDevices.push(action.payload);

    return Object.assign({}, state, { 
      devices: copyDevices, 
    });
  } else if (action.type === SAVE_LOG_ENTRIES) {
    if (action.payload.length <= 0) {
      return state;
    }

    let copyDevices = state.devices.slice();
    var foundDevice = copyDevices.find(function(element) {
      return element.id === action.payload[0].id;
    });
    foundDevice.logEntries = action.payload;

    return Object.assign({}, state, { 
      devices: copyDevices, 
    });
  } else {
    return state;
  }
}

export default deviceData;
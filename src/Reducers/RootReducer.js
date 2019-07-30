import { combineReducers } from 'redux';

import account from './Account';
import alert from './Alert';
import loading from './Loading';
import deviceData from './DeviceData';

const rootReducer = combineReducers({
  account,
  alert,
  loading,
  deviceData
});

export default rootReducer;
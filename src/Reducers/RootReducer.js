import { combineReducers } from 'redux';

import account from './Account';
import alert from './Alert';

const rootReducer = combineReducers({
  account,
  alert
});

export default rootReducer;
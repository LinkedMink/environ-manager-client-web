import { LOADING_START, LOADING_END } from '../Actions/Loading';

function loading(state = {}, action) {
  if (action.type === LOADING_START) {
    return Object.assign({}, state, { 
      isLoading: true, message: action.payload, 
    });
  } else if (action.type === LOADING_END) {
    return Object.assign({}, state, { 
      isLoading: false
    });
  } else {
    return state;
  }
}

export default loading;
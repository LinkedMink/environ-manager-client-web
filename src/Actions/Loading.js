export const LOADING_START = 'LOADING_START';
export const LOADING_END = 'LOADING_END';

export function loadingStart(text = "Loading...") {
  return { 
    type: LOADING_START, 
    payload: text
  };
}

export function loadingEnd() {
  return { 
    type: LOADING_END, 
    payload: null
  };
}

export const SAVE_DEVICES = 'SAVE_DEVICES';
export const SAVE_STATUS = 'SAVE_STATUS';
export const SAVE_LOG_ENTRIES = 'SAVE_LOG_ENTRIES';

export function saveDevices(devices) {
  return { 
    type: SAVE_DEVICES, 
    payload: devices
  };
}

export function saveStatus(status) {
  return { 
    type: SAVE_STATUS, 
    payload: status
  };
}

export function saveLogEntries(entries) {
  return { 
    type: SAVE_LOG_ENTRIES, 
    payload: entries
  };
}
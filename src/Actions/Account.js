export const SAVE_SESSION = 'SAVE_SESSION';

export function saveSession(serverBaseUrl, email, userId, token, roles) {
  return { 
    type: SAVE_SESSION, 
    payload: { 
      serverBaseUrl: serverBaseUrl, 
      email: email, 
      userId: userId, 
      token: token,
      roles: roles
    }
  };
}
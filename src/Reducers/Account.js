import { SAVE_SESSION } from '../Actions/Account';

// allowed links are based on login state
const guestLinks = [ 
  { path: "/about", name: "About" },
  { path: "/login", name: "Login" }
];

const authenticatedLinks = [ 
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/logout", name: "Logout" }
];

function account(state = {}, action) {
  if (action.type === SAVE_SESSION) {
    return Object.assign({}, state, action.payload, { links: authenticatedLinks });
  } else {
    return Object.assign({}, state, action.payload, { links: guestLinks });
  }
}

export default account;
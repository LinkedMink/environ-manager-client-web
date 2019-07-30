import { connect } from "react-redux";

import NavigationMenu from "../Components/NavigationMenu";

// allowed links are based on login state
const guestLinks = [ 
  { path: "/about", name: "About", icon: "info" },
  { path: "/login", name: "Login", icon: "account-login" }
];

const authenticatedLinks = [ 
  { path: "/", name: "Home", icon: "home" },
  { path: "/about", name: "About", icon: "info" },
  { path: "/logout", name: "Logout", icon: "account-logout" }
];

function mapStateToProps (state) {
  return {
    links: state.account.token ? authenticatedLinks : guestLinks
  };
}

const NavigationMenuContainer = connect(mapStateToProps)(NavigationMenu);

export default NavigationMenuContainer
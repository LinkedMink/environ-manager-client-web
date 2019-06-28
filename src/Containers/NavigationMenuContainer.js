import { connect } from "react-redux";

import NavigationMenu from "../Components/NavigationMenu";

function mapStateToProps (state) {
  return {
    links: state.account.links
  };
}

const NavigationMenuContainer = connect(mapStateToProps)(NavigationMenu);

export default NavigationMenuContainer
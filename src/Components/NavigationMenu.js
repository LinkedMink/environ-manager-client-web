import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

import './NavigationMenu.sass';

class NavigationMenu extends React.Component {
  render() {
    return (
      <Nav defaultActiveKey="/home" className="flex-column navigation-panel">
        {this.props.links.map((value, index) => {
          return (
            <LinkContainer exact={true} key={index} to={value.path}>
              <Nav.Link>{value.name}</Nav.Link>
            </LinkContainer>
          );
        })}
      </Nav>
    );
  }
}

export default NavigationMenu;
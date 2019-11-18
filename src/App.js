import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import './App.sass';
import { Roles } from './Const/Account';
import RouteAuthContainer from './Containers/RouteAuthContainer';

import HeaderPanel from './Components/HeaderPanel';
import NavigationMenuContainer from './Containers/NavigationMenuContainer';
import AlertDialogPanel from './Containers/AlertDialogPanel';
import LoadingOverlayContainer from './Containers/LoadingOverlayContainer';

import LoginContainer from './Containers/LoginContainer';
import HomeContainer from './Containers/HomeContainer';
import DeviceContainer from './Containers/DeviceContainer';
import AboutScreen from './Components/Screens/AboutScreen';
import LogoutContainer from './Containers/LogoutContainer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderPanel />
        <Container className="app-container" fluid="true">
          <LoadingOverlayContainer />
          <Row>
            <Col xs="12" sm="12" md="2">
              <NavigationMenuContainer />
            </Col>
            <Col xs="12" sm="12" md="10">
              <Switch>
                <RouteAuthContainer requiredRole={Roles.ADMINISTRATOR} exact path="/" component={HomeContainer} />
                <RouteAuthContainer requiredRole={Roles.ADMINISTRATOR} exact path="/device/:id" component={DeviceContainer} />
                <Route exact path="/about" component={AboutScreen} />
                <Route exact path="/login" component={LoginContainer} />
                <Route exact path="/logout" component={LogoutContainer} />
              </Switch>
            </Col>
          </Row>
        </Container>
        <AlertDialogPanel />
      </BrowserRouter>
    );
  }
}

export default App;
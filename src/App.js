import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import './App.sass';
import HeaderPanel from './Components/HeaderPanel';
import NavigationMenuContainer from './Containers/NavigationMenuContainer';
import LoginContainer from './Containers/LoginContainer';
import HomeScreen from './Components/Screens/HomeScreen';
import AboutScreen from './Components/Screens/AboutScreen';
import AlertDialogPanel from './Containers/AlertDialogPanel';

class App extends React.Component {
  render() {
    return (
      <Router>
        <HeaderPanel />
        <Container className="app-container" fluid="true">
          <Row>
            <Col xs="12" sm="12" md="2">
              <NavigationMenuContainer />
            </Col>
            <Col xs="12" sm="12" md="10">
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/about" component={AboutScreen} />
              <Route exact path="/login" component={LoginContainer} />
            </Col>
          </Row>
        </Container>
        <AlertDialogPanel />
      </Router>
    );
  }
}

export default App;
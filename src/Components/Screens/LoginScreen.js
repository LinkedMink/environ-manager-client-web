import React from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      serverBaseUrl: "",
      email: "",
      password: ""
    };

    this.handleChange  = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.props.login) {
      this.props.login(this.state)
    }
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="serverBaseUrl">
            <Form.Label column xs="12">
              Server Address
            </Form.Label>
            <Col xs="12" sm="8" md="6" lg="5">
              <Form.Control type="url" placeholder="https://[Host]:[Port]" required
                            value={this.state.serverBaseUrl} onChange={this.handleChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="email">
            <Form.Label column xs="12">
              Email Address
            </Form.Label>
            <Col xs="12" sm="8" md="6" lg="5">
              <Form.Control type="email" placeholder="your.email@domain.sample" required
                            value={this.state.email} onChange={this.handleChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="password">
            <Form.Label column xs="12">
              Password
            </Form.Label>
            <Col xs="12" sm="8" md="6" lg="5">
              <Form.Control type="password" placeholder="!tMayN33dMoreEntropy2019" required
                            value={this.state.password} onChange={this.handleChange} />
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default LoginScreen;
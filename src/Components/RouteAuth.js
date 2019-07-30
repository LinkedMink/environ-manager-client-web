// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

class RouteAuth extends React.Component {
  constructor(props) {
    super(props);

    this.renderComponentRedirect  = this.renderComponentRedirect.bind(this);
  }

  getNoComponentProps(props) {
    let { component: Component, ...rest } = props;
    return rest;
  }

  hasRequiredRole() {
    let hasRequiredRole = true;
    if (this.props.requiredRole) {
      if (!this.props.roles || 
          this.props.roles.indexOf(this.props.requiredRole) < 0) {
        hasRequiredRole = false;
      }
    }

    return hasRequiredRole;
  }

  renderComponentRedirect(props) {
    if (this.hasRequiredRole()) {
      return (<this.props.component {...props} />);
    } else {
      return (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />);
    }
  }

  render() {
    return (
      <Route
        {...this.getNoComponentProps(this.props)}
        render={this.renderComponentRedirect} />
    );
  }
}

export default RouteAuth;
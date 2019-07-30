import React from 'react';

import './LoadingOverlay.sass';

class LoadingOverlay extends React.Component {
  constructor(props) {
    super(props);

    this.styles = {
      visible: {
        zIndex: 100,
        opacity: 0.6
      },
      invisible: {
        zIndex: -1,
        opacity: 0
      }
    }
  }

  getOverlayStyle() {
    if (this.props.isLoading) {
      return this.styles.visible;
    } else {
      return this.styles.invisible;
    }
  }

  render() {
    return (
      <div className="loading-overlay" style={this.getOverlayStyle()}>
        <div>
          <img alt="Loading Animation" src="/img/gears.svg" /><br />
          <span>{this.props.message}</span>
        </div>
      </div>
    );
  }
}

export default LoadingOverlay;
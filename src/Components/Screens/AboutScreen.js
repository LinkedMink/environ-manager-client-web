import React from 'react';

class AboutScreen extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <h4>
          <a href="https://github.com/LinkedMink/environ-manager-client-web">Environ Manager Client (This)</a>
        </h4>
        <h4>
          <a href="https://github.com/LinkedMink/environ-manager-server">Environ Manager Server</a>
        </h4>
        <h4>
          <a href="https://github.com/LinkedMink/environ-manager-hw-rpi">Environ Manager for Raspberry Pi</a>
        </h4>
      </div>
    );
  }
}

export default AboutScreen;
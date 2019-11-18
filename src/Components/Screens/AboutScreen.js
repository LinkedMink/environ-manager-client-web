import React from 'react';

class AboutScreen extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>
        I wanted to create a simple, networked system that I could customize as needed 
        to monitor environmental factors for enclosed environments (terrariums, grow 
        chambers, etc.). Essentially, I wanted a custom IoT solution I could understand
        at a low level and manage myself without abstraction layers (Alexa Skills, Automation 
        Hubs, and the like). It should be able to save info to a server for further analysis. 
        Secondarily, it should be able to react to changes in the environment and correct them.
        </p>
        <p>
        This is meant to be used in a client/server system with remote sensor/control 
        hardware. See:
        </p>
        <ul>
          <li><a href="https://github.com/LinkedMink/environ-manager-client-web">Environ Manager Client</a></li>
          <li><a href="https://github.com/LinkedMink/environ-manager-server">Environ Manager Server</a></li>
          <li><a href="https://github.com/LinkedMink/environ-manager-hw-rpi">Environ Manager for Raspberry Pi</a></li>
        </ul>
        <p>
        Disclaimer: This project was mainly intended as a learning aid and for private use.
        </p>
      </div>
    );
  }
}

export default AboutScreen;
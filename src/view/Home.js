import React from 'react';
import PropTypes from 'prop-types';

import './Home.sass';

class Home extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  }

  state = {
    welcomeText: 'Hello',
  };

  render() {
    const { welcomeText } = this.state;
    const { username } = this.props;

    return (
      <div>
        <h1 className="welcome">
          {welcomeText}
          <span className="username">{`: ${username}`}</span>
        </h1>
      </div>
    );
  }
}

export default Home;

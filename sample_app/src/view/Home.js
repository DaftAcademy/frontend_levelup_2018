import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../components/Menu';

import './Home.sass';

const MENU_ITEMS = [
  { name: 'Home' },
  { name: 'Search' },
  { name: 'Contact' },
  { name: 'Flight details' },
];

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
        <Menu items={MENU_ITEMS} />
        <h1 className="welcome">
          {welcomeText}
          <span className="username">{`: ${username}`}</span>
        </h1>
      </div>
    );
  }
}

export default Home;

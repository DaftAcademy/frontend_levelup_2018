import { hot } from 'react-hot-loader';
import * as React from 'react';
import Home from './view/Home';
import Menu from './components/Menu';

import './styles/theme.sass';

const MENU_ITEMS = [
  { name: 'Home' },
  { name: 'Search' },
  { name: 'Contact' },
];

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <Menu items={MENU_ITEMS} />
        <Home username="DaftCoder" />
      </main>
    );
  }
}

export default hot(module)(App);

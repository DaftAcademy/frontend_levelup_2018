import { hot } from 'react-hot-loader';
import * as React from 'react';
// import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

// import Home from './view/Home';
// import PageFooter from './components/PageFooter';
// import FlightDetails from './view/FlightDetails';
// import launch from './assets/sample_json/launch.json';
// import rocket from './assets/sample_json/rocket.json';
// import launchSite from './assets/sample_json/launch_site.json';

import Todos from './view/Todos';

import todoStore from './stores/todoStore';

import './styles/theme.sass';

// configure({ enforceActions: true });

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main className="page-container">
        {/* <div className="page-content">
          <FlightDetails
            launch={launch}
            rocket={rocket}
            launchSite={launchSite}
          />
        </div>
        <PageFooter /> */}
        <Provider todoStore={todoStore}>
          <div>
            <Todos />
          </div>
        </Provider>
        <DevTools />
      </main>
    );
  }
}

// <Home username="DaftCoder" />
export default hot(module)(App);

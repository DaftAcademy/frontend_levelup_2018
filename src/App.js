import * as React from "react";
import { hot } from "react-hot-loader";
import Home from "./view/Home"

import "./styles/theme.scss";

class App extends React.Component {
    render() {
        return (
            <main>
              <Home username="DaftCoder"/>
            </main>
        );
    }
}

export default hot(module)(App);

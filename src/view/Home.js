import * as React from "react";

import "./Home.scss";

class Home extends React.Component {
  state = {
    welcomeText: "Hello"
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

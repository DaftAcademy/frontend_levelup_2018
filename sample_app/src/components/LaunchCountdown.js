import * as React from 'react';
import PropTypes from 'prop-types';

import { getTimeDiffParts } from 'utils';


class LaunchCountdown extends React.PureComponent {
  static propTypes = {
    date: PropTypes.number, // ts in milis
  };

  state = {
    currentTs: Date.now(),
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  counterInterval = null;

  start() {
    if (this.counterInterval) return;
    this.counterInterval = setInterval(this.tick, 1000);
  }

  stop() {
    clearInterval(this.counterInterval);
    this.counterInterval = null;
  }

  tick = () => {
    this.setState({ currentTs: Date.now() });
  }


  render() {
    const { date, ...otherProps } = this.props;
    const { currentTs } = this.state;

    const diffParts = getTimeDiffParts(Math.abs(currentTs - date));
    const fromOrTo = currentTs > date ? 'from' : 'to';

    const diffStr = diffParts
      .map(({ value, label }) => (value ? `${value} ${label}` : null))
      .filter(v => v !== null)
      .join(' ');


    return <div {...otherProps}>{ diffStr } { fromOrTo } start</div>;
  }
}

export default LaunchCountdown;

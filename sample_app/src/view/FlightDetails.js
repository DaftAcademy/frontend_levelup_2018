import React from 'react';
import spaceXLogoSrc from 'assets/images/space_x_logo_bw_centered.svg';
import arrowPointerSrc from 'assets/images/arrow_pointer.svg';
import { formatDate } from 'utils';

import Metrics from '../components/Metrics';

import launchData from '../assets/sample_json/launch.json';
import rocketData from '../assets/sample_json/rocket.json';
import launchSiteData from '../assets/sample_json/launch_site.json';

import './FlightDetails.sass';

class FlightDetails extends React.Component {
  state = {
    countdownTimer: new Date(launchData.launch_date_utc) - new Date(),
  };

  componentDidMount() {
    this.timer = this.startTimer();
  }

  getCountdownString() {
    let miliseconds = this.state.countdownTimer;
    const daysCount = parseInt(miliseconds / 86400000, 10);

    miliseconds -= daysCount * 86400000;
    const hoursCount = parseInt(miliseconds / 3600000, 10);

    miliseconds -= hoursCount * 3600000;
    const minutesCount = parseInt(miliseconds / 60000, 10);

    return `${daysCount < 0 ? 0 : daysCount} days ${hoursCount < 0 ? 0 : hoursCount} hrs ${minutesCount < 0 ? 0 : minutesCount} mins`;
  }

  startTimer() {
    return setInterval(() => {
      this.setState({
        countdownTimer: this.state.countdownTimer - 1000,
      });
    }, 1000);
  }

  render() {
    const rocketMetrics = [
      { label: 'Name', value: rocketData.name },
      { label: 'Company', value: rocketData.company },
      { label: 'Height', value: `${rocketData.height.meters}M / ${rocketData.height.feet}FT` },
      { label: 'Diameter', value: `${rocketData.diameter.meters}M / ${rocketData.diameter.feet}FT` },
      { label: 'Mass', value: `${rocketData.mass.kg}KG / ${rocketData.mass.lb}LB` },
      { label: 'First flight', value: rocketData.first_flight },
      { label: 'Country', value: rocketData.country },
      { label: 'Success rate', value: `${rocketData.success_rate_pct}%` },
      { label: 'Cost per launch', value: `$${rocketData.cost_per_launch}` },
    ];

    const launchPadMetrics = [
      { label: 'Name', value: launchSiteData.full_name },
      { label: 'Location', value: launchSiteData.location.name },
    ];

    return (
      <div className="details">
        <div className="details__header">
          <div className="details__header-content">
            <div className="details__header-side">
              <a href="http://www.daftcode.pl/" className="details__header-action">
                <span className="details__header-action-icon icon-arrow-back">
                  <img
                    src={arrowPointerSrc}
                    alt=""
                  />
                </span>
                <span className="details__header-action-text">Go back</span>
              </a>
            </div>

            <div className="details__header-main">
              <img
                src={spaceXLogoSrc}
                className="details__brand"
                alt="SpaceX logo"
              />
            </div>

            <div className="details__header-side" />
          </div>
        </div>
        <div className="details__body">
          <div className="details__body-content">
            <div className="flight">
              <section className="flight__summary">
                <span className="flight__summary-date">{ formatDate(new Date(launchData.launch_date_utc)) }</span>
                <h1 className="flight__summary-name">{ `${launchData.launch_site.site_name} launch` }</h1>
                <p className="flight__summary-countdown">{this.getCountdownString()} to start</p>
                <img
                  src={launchData.links.mission_patch_small}
                  className="flight__summary-patch"
                  alt="SpaceX logo"
                />
              </section>
              <div className="flight__description">
                <Metrics title="Details" description={launchData.details} />
                <Metrics title="Rocket" items={rocketMetrics} description={rocketData.description} />
                <Metrics title="Launch pad" items={launchPadMetrics} description={launchSiteData.details} />
              </div>
            </div>
          </div>
        </div>
        <div className="details__controls">
          <div className="details__controls-content">
            <h1 className="details__controls-title">Mission links</h1>
            <ul className="details__actions">
              <li className="details__action">
                <a href={launchData.links.reddit_campaign}>Reddit campaign</a>
              </li>
              <li className="details__action">
                <a href={launchData.links.presskit}>Presskit</a>
              </li>
              <li className="details__action">
                <a href={launchData.links.video_link}>Mission video</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default FlightDetails;

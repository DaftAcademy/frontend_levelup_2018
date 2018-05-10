import React from 'react';
import PropTypes from 'prop-types';
import spaceXLogoSrc from 'assets/images/space_x_logo_bw_centered.svg';
import arrowPointerSrc from 'assets/images/arrow_pointer.svg';
import { formatDate } from 'utils';

import Metrics from '../components/Metrics';
import LaunchCountdown from '../components/LaunchCountdown';

import './FlightDetails.sass';

const FlightDetails = ({ launch, rocket, launchSite }) => {
  const rocketMetrics = [
    { label: 'Name', value: rocket.name },
    { label: 'Company', value: rocket.company },
    { label: 'Height', value: `${rocket.height.meters}M / ${rocket.height.feet}FT` },
    { label: 'Diameter', value: `${rocket.diameter.meters}M / ${rocket.diameter.feet}FT` },
    { label: 'Mass', value: `${rocket.mass.kg}KG / ${rocket.mass.lb}LB` },
    { label: 'First flight', value: rocket.first_flight },
    { label: 'Country', value: rocket.country },
    { label: 'Success rate', value: `${rocket.success_rate_pct}%` },
    { label: 'Cost per launch', value: `$${rocket.cost_per_launch}` },
  ];

  const launchPadMetrics = [
    { label: 'Name', value: launchSite.full_name },
    { label: 'Location', value: launchSite.location.name },
  ];

  const launchDate = new Date(launch.launch_date_utc);

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
              <span className="flight__summary-date">{ formatDate(launchDate) }</span>
              <h1 className="flight__summary-name">{ `${rocket.name} launch` }</h1>
              <LaunchCountdown className="flight__summary-countdown" date={launchDate.valueOf()} />
              <img
                src={launch.links.mission_patch_small}
                className="flight__summary-patch"
                alt="SpaceX logo"
              />
            </section>
            <div className="flight__description">
              <Metrics title="Details" description={launch.details} />
              <Metrics title="Rocket" items={rocketMetrics} description={rocket.description} />
              <Metrics title="Launch pad" items={launchPadMetrics} description={launchSite.details} />
            </div>
          </div>
        </div>
      </div>
      <div className="details__controls">
        <div className="details__controls-content">
          <h1 className="details__controls-title">Mission links</h1>
          <ul className="details__actions">
            <li className="details__action">
              <a href={launch.links.reddit_campaign}>Reddit campaign</a>
            </li>
            <li className="details__action">
              <a href={launch.links.presskit}>Presskit</a>
            </li>
            <li className="details__action">
              <a href={launch.links.video_link}>Mission video</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

FlightDetails.propTypes = {
  launch: PropTypes.object,
  rocket: PropTypes.object,
  launchSite: PropTypes.object,
};

export default FlightDetails;

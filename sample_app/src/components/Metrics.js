import React from 'react';
import PropTypes from 'prop-types';
import './Metrics.sass';

class Metrics extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    })),
    description: PropTypes.string,
  }

  static defaultProps = {
    items: [],
  }

  getTableSection() {
    const { items } = this.props;

    if (items.length > 0) {
      let tableFieldsLeft;

      const tableFieldsRight = items.map(item => (
        <div className="metrics__item" key={item.label}>
          <span className="metrics__item-label">{ `${item.label}:` }</span>
          <span className="metrics__item-value">{ item.value }</span>
        </div>
      ));

      if (tableFieldsRight.length > 0) {
        tableFieldsLeft = tableFieldsRight.splice(0, Math.ceil(tableFieldsRight.length / 2));
      }

      return (
        <div className="metrics__table">
          <div className="metrics__table-column">{ tableFieldsLeft }</div>
          { tableFieldsRight.length > 0 ? (<div className="metrics__table-column">{ tableFieldsRight }</div>) : null }
        </div>
      );
    }

    return null;
  }

  render() {
    const { title, description } = this.props;

    return (
      <section className="metrics">
        <h2 className="metrics__header">{ title }</h2>
        <div className="metrics__body">
          {this.getTableSection()}
          { description ? (
            <p className="metrics__description">{ description }</p>
          ) : null }
        </div>
      </section>
    );
  }
}

export default Metrics;

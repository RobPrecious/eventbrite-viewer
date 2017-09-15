import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import EventList from './EventList';

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

class EventContainer extends Component {
  render() {
    return (
      <div>
        <EventList events={this.props.events} />
      </div>
    );
  }
}

EventContainer.propTypes = {
  events: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(EventContainer);
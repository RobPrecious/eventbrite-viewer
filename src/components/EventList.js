import React from 'react';
import PropTypes from 'prop-types';

import Event from './Event';

import spinner from './Spinner.gif';

const EventList = ({ events }) => {
  if (events && events.length > 0) {
    return (
      <div>
        {events.map((event) => <Event key={event.id} event={event} />)}
      </div>
    );
  }
  else {
    return (
      <div className="no-events-notice">
        Loading...
        <img src={spinner} className="spinner" alt="logo" />

      </div>
    )
  }
};

EventList.propTypes = {
  events: PropTypes.array.isRequired
};

export default EventList;
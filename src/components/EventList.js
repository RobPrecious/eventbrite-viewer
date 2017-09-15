import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event';

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
      <div>
        No Events
      </div>
    )
  }
};

EventList.propTypes = {
  events: PropTypes.array.isRequired
};

export default EventList;
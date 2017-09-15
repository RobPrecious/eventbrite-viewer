import React from 'react';
import PropTypes from 'prop-types';

const Event = ({ event }) => {
  return (
    <div>
      {event.name.html}
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.object.isRequired
};

export default Event;
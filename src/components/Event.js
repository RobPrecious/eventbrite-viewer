import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Event extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.eventClicked = this.eventClicked.bind(this);
  }
  eventClicked(e) {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  render() {
    const event = this.props.event;
    return (
      <div>
        <div className="event-header" onClick={this.eventClicked} >
          {event.name.text}
        </div>
        {this.state.open ? event.description.text : ''}
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired
};

export default Event;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Event.css';


class Event extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.eventClicked = this.eventClicked.bind(this);
  }
  eventClicked(e) {
    // e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  render() {
    const event = this.props.event;
    return (
      <div className="event">
        <div className="event-header" onClick={this.eventClicked} >

          <div className="col-md-4 event-img-container">
            <img className="event-img" src={event.logo.original.url} alt="Event Logo" />
          </div>
          <div className="event-primary-info">
            <span className="event-start"> {moment(event.start.utc).format('llll')}</span>
            <span className="event-name"> {event.name.text}</span>
            <span className="event-expand"><i className={this.state.open ? " fa fa-minus" : "fa fa-plus"} aria-hidden="true"></i></span>
            <a className="event-ext-page" href={event.vanity_url} target="_blank"> Visit EventBrite Page <i className="fa fa-external-link" aria-hidden="true"></i></a>
          </div>
        </div>

        <div className={this.state.open ? "event-info" : "hide"}>
          <span className="event-description-title">Description</span>
          {this.state.open ? event.description.text : ''}
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired
};

export default Event;
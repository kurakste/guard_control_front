import React from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup,
  ListGroupItem,
  Badge,
} from 'reactstrap';
import './ControlPanelAlarms.scss';

const Alarms = ({ alarms, alarmId, onClick }) => (
  <ListGroup>
    {alarms.map(alarm => {
      let status = 'danger';
      if (alarm.status === 1) {
        status = 'warning';
      }
      if (alarm.status === 2) {
        status = 'success';
      }
      return (
        <ListGroupItem
          className="justify-content-between"
          tag="button"
          action
          key={alarm.id}
          active={alarmId === alarm.id}
          onClick={() => onClick(alarm.id)}
        >
          {`Событие у ${alarm.user.lastName}, тел. ${alarm.user.tel}`}
          <Badge className="float-right" pill color={status}>!</Badge>
        </ListGroupItem>);
    })}
  </ListGroup>
);

Alarms.propTypes = {
  alarms: PropTypes.array.isRequired,
  alarmId: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Alarms;

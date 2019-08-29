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
    {alarms.map(alarm => (
        <ListGroupItem
          className="justify-content-between"
          tag="button"
          action
          key={alarm.id}
          active={alarmId === alarm.id}
          onClick={() => onClick(alarm.id)}
        >
          {`Событие у ${alarm.user.lastName}, тел. ${alarm.user.tel}`}
          <Badge className="float-right" pill color="warning">!</Badge>
        </ListGroupItem>
    ))}
  </ListGroup>
);

Alarms.propTypes = {
  alarms: PropTypes.array.isRequired,
  alarmId: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Alarms;

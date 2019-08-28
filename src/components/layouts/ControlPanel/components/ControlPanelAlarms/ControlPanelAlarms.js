import React from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup,
  ListGroupItem,
  Badge,
} from 'reactstrap';
import './ControlPanelAlarms.scss';

const Alarms = ({ alarms }) => (
  <ListGroup>
    {alarms.map(alarm => (
        <ListGroupItem className="justify-content-between" tag="button" action key={alarm.id}>
          {`Событие у ${alarm.user.lastName}, тел. ${alarm.user.tel}`}
          <Badge className="float-right" pill color="warning">!</Badge>
        </ListGroupItem>
    ))}
  </ListGroup>
);

Alarms.propTypes = {
  alarms: PropTypes.array.isRequired,
};

export default Alarms;

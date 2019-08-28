import React from 'react';
import { useStore } from 'effector-react';
import { alarms } from 'store';
import {
  ListGroup,
  ListGroupItem,
  Badge,
} from 'reactstrap';
import './ControlPanelAlarms.scss';

const Alarms = () => {
  const alarmsFromStore = useStore(alarms);

  return (
    <ListGroup>
      {alarmsFromStore.map(alarm => (
          <ListGroupItem className="justify-content-between" tag="button" action key={alarm.id}>
            {`Событие у ${alarm.user.lastName}, тел. ${alarm.user.tel}`}
            <Badge className="float-right" pill color="warning">!</Badge>
          </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Alarms;

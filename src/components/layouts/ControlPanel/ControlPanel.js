import React, { useState } from 'react';
import { useStore } from 'effector-react';
import { alarms } from 'store';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import UserPanel from '../UserPanel';
import ControlPanelAlarms from './components/ControlPanelAlarms';
import ControlPanelHeader from './components/ControlPanelHeader';
import ControlPanelTracking from './components/ControlPanelTracking';

import './ControlPanel.scss';

const ControlPanel = () => {
  const alarmsFromStore = useStore(alarms);
  const [activeTab, setActiveTab] = useState(0);
  const [activeAlarm, setActiveAlarm] = useState(alarmsFromStore[0]);

  const onClick = (id) => {
    const newAlarm = alarmsFromStore.filter(alarm => alarm.id === id)[0];
    setActiveAlarm(newAlarm);
  };

  return (
    <React.Fragment>
      <Container fluid className="main-container animated fadeIn">
        <Row>
          <Col lg='2' className='alarms-container'>
            <ControlPanelAlarms
              alarms={alarmsFromStore}
              alarmId={activeAlarm.id}
              onClick={onClick}
            />
          </Col>
          <Col className="px-0 d-flex flex-column">
            <ControlPanelHeader onClick={setActiveTab} activeTab={activeTab} />
            {activeTab ? <UserPanel user={activeAlarm.user}/>
              : <ControlPanelTracking alarm={activeAlarm}/>}
          </Col>
          <Col lg='2' className='events-container'>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ControlPanel;

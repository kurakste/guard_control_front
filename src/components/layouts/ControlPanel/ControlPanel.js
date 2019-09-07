import React, { useState } from 'react';
import { useStore } from 'effector-react';
import { alarms } from 'store';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import ControlPanelAlarms from './components/ControlPanelAlarms';
import ControlPanelContent from './components/ControlPanelContent';

import './ControlPanel.scss';

const ControlPanel = () => {
  const alarmsFromStore = useStore(alarms);
  const [activeTab, setActiveTab] = useState(0);
  const [activeAlarm, setActiveAlarm] = useState(
    Boolean(alarmsFromStore.length) && alarmsFromStore[0],
  );

  const onClick = (id) => {
    const newAlarm = alarmsFromStore.filter(alarm => alarm.id === id)[0];
    setActiveAlarm(newAlarm);
  };

  return (
    <React.Fragment>
      <Container fluid className="main-container animated fadeIn">
        <Row>
          <Col lg='2' className='alarms-container'>
            {alarmsFromStore.length
              ? <ControlPanelAlarms
                alarms={alarmsFromStore}
                alarmId={activeAlarm.id}
                onClick={onClick}
            /> : <span className="control-panel_info">Активные тревоги отсутствуют</span>}
          </Col>
          <Col className="px-0 d-flex flex-column">
            {Boolean(alarmsFromStore.length)
              && <ControlPanelContent
                setActiveTab={setActiveTab}
                activeAlarm={activeAlarm}
                activeTab={activeTab}
            />
            }
          </Col>
          <Col lg='2' className='events-container'>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ControlPanel;

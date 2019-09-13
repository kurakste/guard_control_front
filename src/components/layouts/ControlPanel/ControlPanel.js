import React, { useState, useEffect } from 'react';
import usePrevious from 'hooks';
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

const ControlPanel = (props) => {
  const alarmsFromStore = useStore(alarms);
  const [activeTab, setActiveTab] = useState(0);
  const [activeAlarm, setActiveAlarm] = useState(null);
  const prevActiveAlarm = usePrevious(activeAlarm);

  const onClick = (id) => {
    const newAlarm = alarmsFromStore.find(alarm => alarm.id === id);
    setActiveAlarm(newAlarm);
  };

  useEffect(() => {
    if (!prevActiveAlarm && alarmsFromStore.length) {
      setActiveAlarm(alarmsFromStore[0]);
      return;
    }
    const prevAlarm = alarmsFromStore.find(alarm => alarm.id === activeAlarm.id);
    if (!prevAlarm) {
      setActiveAlarm(alarmsFromStore[0]);
      return;
    }
    setActiveAlarm(alarmsFromStore[alarmsFromStore.indexOf(prevAlarm)]);
  }, [alarmsFromStore]);
  return (
    <React.Fragment>
      <Container fluid className="main-container animated fadeIn">
        <Row>
          <Col xl='4' lg='4' mg='4' sm='4' xs='4' className='alarms-container pr-0'>
            {alarmsFromStore.length && activeAlarm
              ? <ControlPanelAlarms
                alarms={alarmsFromStore}
                alarmId={activeAlarm.id}
                onClick={onClick}
            /> : <span className="control-panel_info">Активные тревоги отсутствуют</span>}
          </Col>
          <Col xl='8' lg='8' mg='8' sm='8' xs='8' className="px-0 d-flex flex-column">
            {(Boolean(alarmsFromStore.length) && activeAlarm)
              && <ControlPanelContent
                setActiveTab={setActiveTab}
                activeAlarm={activeAlarm}
                activeTab={activeTab}
                {...props}
            />
            }
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ControlPanel;

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
  const [activeTab, setActive] = useState(0);
  return (
    <React.Fragment>
      <Container fluid className="main-container">
        <Row>
          <Col lg='2' className='alarms-container'>
            <ControlPanelAlarms alarms={alarmsFromStore}/>
          </Col>
          <Col className="px-0 d-flex flex-column">
            <ControlPanelHeader onClick={setActive} activeTab={activeTab} />
            {activeTab ? <UserPanel user={alarmsFromStore[activeTab].user}/>
              : <ControlPanelTracking alarm={alarmsFromStore[activeTab]}/>}
          </Col>
          <Col lg='2' className='events-container'>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ControlPanel;

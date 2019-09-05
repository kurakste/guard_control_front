import React from 'react';
import PropTypes from 'prop-types';

import UserPanel from 'components/layouts/UserPanel';
import ControlPanelHeader from '../ControlPanelHeader';
import ControlPanelTracking from '../ControlPanelTracking';

const ControlPanelContent = ({ setActiveTab, activeAlarm, activeTab }) => (
  <React.Fragment>
    <ControlPanelHeader onClick={setActiveTab} activeTab={activeTab} />
    {activeTab ? <UserPanel user={activeAlarm.user}/>
      : <ControlPanelTracking alarm={activeAlarm}/>}
  </React.Fragment>
);

ControlPanelContent.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
  activeTab: PropTypes.func.isRequired,
  activeAlarm: PropTypes.object.isRequired,
};

export default ControlPanelContent;

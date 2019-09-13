import React from 'react';
import PropTypes from 'prop-types';

import UserPanel from 'components/layouts/UserPanel';
import ControlPanelHeader from '../ControlPanelHeader';
import ControlPanelTracking from '../ControlPanelTracking';

const ControlPanelContent = (props) => {
  const {
    setActiveTab,
    activeAlarm,
    activeTab,
    socket,
  } = props;
  return (
    <React.Fragment>
      <ControlPanelHeader
        onClick={setActiveTab}
        activeTab={activeTab}
        alarm={activeAlarm}
        socket={socket}

      />
      {activeTab ? <UserPanel user={activeAlarm.User}/>
        : <ControlPanelTracking alarm={activeAlarm}/>}
    </React.Fragment>
  );
};

ControlPanelContent.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired,
  activeAlarm: PropTypes.object.isRequired,
  socket: PropTypes.object.isRequired,
};

export default ControlPanelContent;

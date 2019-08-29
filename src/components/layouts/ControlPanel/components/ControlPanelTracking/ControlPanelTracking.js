import React from 'react';
import PropTypes from 'prop-types';

import ControlPanelMap from '../ControlPanelMap';
import ControlPanelInfo from '../ControlPanelInfo';

const ControlPanelTracking = ({ alarm }) => (
  <React.Fragment>
    <ControlPanelMap lat={alarm.lat} lon={alarm.lon} />
    <ControlPanelInfo chops={alarm.chops} />
  </React.Fragment>
);

ControlPanelTracking.propTypes = {
  alarm: PropTypes.object.isRequired,
};

export default ControlPanelTracking;

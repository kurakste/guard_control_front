import React from 'react';
import PropTypes from 'prop-types';

import ControlPanelMap from '../ControlPanelMap';
import ControlPanelInfo from '../ControlPanelInfo';

const ControlPanelTracking = ({ alarm }) => (
  <React.Fragment>
    <ControlPanelMap track={alarm.track} />
    <ControlPanelInfo chops={alarm.Gbrs} />
  </React.Fragment>
);

ControlPanelTracking.propTypes = {
  alarm: PropTypes.object.isRequired,
};

export default ControlPanelTracking;

import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

import Marker from './Marker';

import './ControlPanelMap.scss';

const ControlPanelMap = ({ track, alarm }) => {
  const lat = track[0][0];
  const lng = track[0][1];
  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCMm5CY1pV5wtF1-P2ukFI9-kQVIs0ZOa0' }}
        center={{ lat, lng }}
        defaultZoom={10}
      >
        <Marker lat={lat} lng={lng} alarm={alarm} />
      </GoogleMapReact>
    </div>
  );
};

ControlPanelMap.propTypes = {
  track: PropTypes.array.isRequired,
  alarm: PropTypes.object.isRequired,
};

export default ControlPanelMap;

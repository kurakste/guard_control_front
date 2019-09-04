import React from 'react';
import GoogleMapReact from 'google-map-react';

import './ControlPanelMap.scss';

const ControlPanelMap = ({ lat, lng }) => {
  console.log(lat, lng);
  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCMm5CY1pV5wtF1-P2ukFI9-kQVIs0ZOa0' }}
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        defaultZoom={11}
      >
      </GoogleMapReact>
    </div>
  );
};

export default ControlPanelMap;

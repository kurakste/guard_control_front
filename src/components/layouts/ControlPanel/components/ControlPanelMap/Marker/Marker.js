import React from 'react';

import { ReactComponent as MarkerIcon } from 'assets/icons/Map_marker.svg';


import './Marker.scss';

const Marker = () => (
  <div className="marker-container">
    <MarkerIcon className="marker-icon"/>
  </div>
);

export default Marker;

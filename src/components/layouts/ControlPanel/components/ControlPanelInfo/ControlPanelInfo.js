import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './ControlPanelInfo.scss';

import ChopTable from '../ChopTable';
import ChopInfo from '../ChopInfo';

const ControlPanelInfo = ({ chops }) => {
  const [chopSelected, selectChop] = useState(chops[0]);

  const onClick = (index) => {
    selectChop(chops[index]);
  };

  useEffect(() => {
    selectChop(chops[0]);
  }, [chops]);

  return (
    <div className="chops-container d-flex animated fadeIn">
      <ChopTable
        chops={chops}
        onClick={onClick}
        activeChopIndex={chops.indexOf(chopSelected)}
      />
      <ChopInfo chop={chopSelected} />
    </div>
  );
};

ControlPanelInfo.propTypes = {
  chops: PropTypes.array.isRequired,
};

export default ControlPanelInfo;

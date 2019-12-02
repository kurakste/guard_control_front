
/* global navigator */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as MarkerIcon } from 'assets/icons/Map_marker.svg';

import {
  Button,
} from 'reactstrap';

import './Marker.scss';

const Marker = ({ alarm }) => {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setIsClicked(!isClicked);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(
      `
        ФИО: ${alarm.User.firstName} ${alarm.User.lastName}
        ТЕЛ.: ${alarm.User.tel}
        Адрес: ${alarm.address}
        Широта: ${alarm.track[0][0]}
        Долгота: ${alarm.track[0][1]}
      `,
    )
      .then(() => {
        onClick();
      })
      .catch(err => {
        console.log('Something went wrong', err);
      });
  };

  return (
    !isClicked
      ? (
      <div className="marker-container" onClick={onClick}>
        <MarkerIcon className="marker-icon"/>
      </div>
      )
      : (
        <div className='marker-opened'>
          <div className='d-flex align-items-top justify-content-between align-items-start'>
            <div className='alarm-info-container'>
              <div className={'alarm-info'}>
                {`ФИО: ${alarm.User.firstName} ${alarm.User.lastName}`}
              </div>
              <div className={'alarm-info'}>
                {`ТЕЛ.: ${alarm.User.tel}`}
              </div>
              <div className={'alarm-info'}>
                {`Адрес: ${alarm.address}`}
              </div>
              <div className={'alarm-info'}>
                {`Широта: ${alarm.track[0][0]}`}
              </div>
              <div className={'alarm-info'}>
                {`Долгота: ${alarm.track[0][1]}`}
              </div>
            </div>
            <button type="button" className="close" aria-label="Close" onClick={onClick}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <Button
            color="ghost-primary"
            onClick={handleCopyClick}
          >
            Скопировать
          </Button>
        </div>
      )
  );
};

Marker.propTypes = {
  alarm: PropTypes.object.isRequired,
};

export default Marker;

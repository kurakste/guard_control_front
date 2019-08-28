import React from 'react';
import PropTypes from 'prop-types';
import './ControlPanelInfo.scss';

import {
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

const ControlPanelInfo = ({ chops }) => (
  <div className="chop-info-container d-flex py-1 flex-row justify-content-start align-items-stretch">
    {chops.map((chop, index) => (
      <Card key={index} className="chop-card my-0">
        <CardHeader>
          {chop.name}
        </CardHeader>
        <CardBody className="p-0">
          <ListGroup flush className="m-0">
            <ListGroupItem>
              <strong>Тел.: </strong>
              <a href={`tel:${chop.phone}`}>
                {chop.phone}
              </a>
            </ListGroupItem>
            <ListGroupItem>
              <strong>Дополнительно: </strong>
              {chop.notes}
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    ))}
  </div>
);

ControlPanelInfo.propTypes = {
  chops: PropTypes.array.isRequired,
};

export default ControlPanelInfo;

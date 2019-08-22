import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Progress, TabContent, TabPane, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppSwitch } from '@coreui/react'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const DefaultAside = props => {

  // eslint-disable-next-line
  const { children, ...attributes } = props;
  const [ activeTab, setActiveTab ] = useState('1')
  return (
    <React.Fragment>
      <Nav tabs>
        <NavItem>
          <NavLink className={classNames({ active: activeTab === '1' })}
                    onClick={() => {
                      setActiveTab('1');
                    }}>
            <i className="icon-list"></i>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={classNames({ active: activeTab === '2' })}
                    onClick={() => {
                      setActiveTab('2');
                    }}>
            <i className="icon-speech"></i>
          </NavLink>
        </NavItem>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
              <ListGroup className="list-group-accent" tag={'div'}>
                <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Сегодня</ListGroupItem>
                <ListGroupItem action tag="a" href="#" className="list-group-item-accent-warning list-group-item-divider">
                  <div>Событие в <strong>"Посудная лавка"</strong> </div>
                  <small className="text-muted mr-3">
                    <i className="icon-calendar"></i>&nbsp; 12 - 13:00
                  </small>
                  <small className="text-muted">
                    <i className="icon-location-pin"></i> ул. Юности
                  </small>
                </ListGroupItem>
                <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Вчера</ListGroupItem>
                <ListGroupItem action tag="a" href="#" className="list-group-item-accent-danger list-group-item-divider">
                  <div>Событие в <strong>"магазин Перетёрочка"</strong></div>
                  <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 12 - 13:00</small>
                  <small className="text-muted">
                    <i className="icon-location-pin"></i> ул. Гагарина
                  </small>
                </ListGroupItem>
              </ListGroup>
            </TabPane>
          <TabPane tabId="2" className="p-3">
              <div className="message">
                <div className="py-3 pb-5 mr-3 float-left">
                  <div className="avatar">
                    <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    <span className="avatar-status badge-success"></span>
                  </div>
                </div>
                <div>
                  <small className="text-muted">Lukasz Holeczek</small>
                  <small className="text-muted float-right mt-1">1:52 PM</small>
                </div>
                <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
                <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt...
                </small>
              </div>
              <hr />
              <div className="message">
                <div className="py-3 pb-5 mr-3 float-left">
                  <div className="avatar">
                    <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    <span className="avatar-status badge-success"></span>
                  </div>
                </div>
                <div>
                  <small className="text-muted">Lukasz Holeczek</small>
                  <small className="text-muted float-right mt-1">1:52 PM</small>
                </div>
                <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
                <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt...
                </small>
              </div>
              <hr />
            </TabPane>          
        </TabContent>        
      </Nav>
    </React.Fragment>
  )
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;

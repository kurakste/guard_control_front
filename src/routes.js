import React from 'react';
import ControlPanel from 'components/layouts/ControlPanel';
import RegistrationPanel from 'components/layouts/RegistrationPanel';
import RegRequests from 'components/layouts/RegRequests';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/main', name: 'Security Control Desc', component: ControlPanel },
  {
    path: '/reg', exact: true, name: 'Registration Requests', component: RegRequests,
  },
  {
    path: '/reg/:id', exact: true, name: 'Registration Requests', component: () => <RegistrationPanel withControls/>,
  },
];

export default routes;

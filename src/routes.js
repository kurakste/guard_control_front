import ControlPanel from 'components/layouts/ControlPanel';
import RegRequests from 'components/layouts/RegRequests';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/main', name: 'Security Control Desc', component: ControlPanel },
  {
    path: '/reg', exact: true, name: 'Registration Requests', component: RegRequests,
  },
];

export default routes;

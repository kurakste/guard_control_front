
import ControlPanel from 'components/layouts/ControlPanel'
import RegistrationPanel from 'components/layouts/RegistrationPanel'

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/main', name: 'Security Control Desc', component: ControlPanel},
  { path: '/data', name: 'Registration Control Desc', component: RegistrationPanel},
];

export default routes;

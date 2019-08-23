
import ControlDesc from 'components/layouts/ControlDesc'
import RegistrationDesc from 'components/layouts/RegistrationDesc'

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/main', name: 'Security Control Desc', component: ControlDesc},
  { path: '/reg', name: 'Registration Control Desc', component: RegistrationDesc},
];

export default routes;

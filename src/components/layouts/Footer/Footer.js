import React, { Suspense } from 'react';
import { AppFooter } from '@coreui/react';
import { useStore } from 'effector-react';

import { status } from 'store';

import Loading from 'components/common/Loading';

import './Footer.scss';

const Footer = () => {
  const statusFromStore = useStore(status);
  let statusIcon = <i className="cui-lightbulb icons font-xl text-danger blink"></i>;
  if (statusFromStore === 'connected') {
    statusIcon = <i className="cui-lightbulb icons font-xl text-success"></i>;
  }
  return (
    <Suspense fallback={Loading}>
      <AppFooter fixed>
        <span>Текущий статус:
          {statusIcon}
        </span>
        <span className="ml-auto">Powered by <a href="https://github.com/kurakste/guard_control_front">Guard Control Team </a></span>
      </AppFooter>
    </Suspense>
  );
};

export default Footer;

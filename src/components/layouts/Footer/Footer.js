import React, { Suspense } from 'react';
import { AppFooter } from '@coreui/react';

import Loading from 'components/common/Loading'

const Footer = () => {
  return (
    <Suspense  fallback={Loading}>
      <AppFooter fixed>
        <span>Текущий статус: 
          <i className="cui-lightbulb icons font-xl text-success"></i>
          <i className="cui-lightbulb icons font-xl text-warning"></i>
          <i className="cui-lightbulb icons font-xl text-danger"></i>
        </span>
        <span className="ml-auto">Powered by <a href="https://github.com/kurakste/guard_control_front">Guard Control Team </a></span>
      </AppFooter>
    </Suspense>
  )
}

export default Footer
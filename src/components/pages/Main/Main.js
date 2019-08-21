import React, { Suspense } from 'react';
import { Container } from 'reactstrap';

import Header from 'components/layouts/Header'

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';

const Main = () => {
  return (
    <div className="app">
      <Header />
    </div>
  )
}

export default Main

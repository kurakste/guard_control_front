import React, { Suspense } from 'react';
import { Container } from 'reactstrap';

import navigation from '_nav';
import * as router from 'react-router-dom';
// routes config

import Header from 'components/layouts/Header'
import Aside from 'components/layouts/Aside'
import Loading from 'components/common/Loading'


import {
  AppAside,
  AppFooter,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';

const Main = ( {history, ...props} ) => {
  const signOut = (e) => {
    e.preventDefault()
    history.push('/login')
  }

  return (
    <div className="app">
      <Header onLogout={signOut}/>
      <div className="app-body">
        <AppSidebar fixed display="lg">
          <Suspense>
            <AppSidebarNav navConfig={navigation} {...props} router={router}/>
          </Suspense>
        </AppSidebar>
        <AppAside fixed>
            <Suspense fallback={Loading}>
              <Aside />
            </Suspense>
        </AppAside>
      </div>
    </div>

  )
}

export default Main

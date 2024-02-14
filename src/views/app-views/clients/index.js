import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
// контент
export const Clients = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/clients/clientlist`} component={lazy(() => import(`./clientList`))} />
        <Route path={`${APP_PREFIX_PATH}/clients/editor`} component={lazy(() => import(`./editor`))} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(Clients);
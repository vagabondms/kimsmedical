import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Information from '@containers/Information';
import Introduce from '@containers/Introduce';
import Main from '@containers/Main';
import Map from '@containers/Map';
import Notice from '@containers/Notice';
import Reservation from '@containers/Reservation';
import Tour from '@containers/Tour';
import path from '@system/constants/paths';
const Routes = () => {
  return (
    <Switch>
      {/* <Content> */}
      <Route exact path={path.main.path}>
        <Main />
      </Route>
      <Route path={path.introduce.path}>
        <Introduce />
      </Route>
      <Route path={path.information.path}>
        <Information />
      </Route>
      <Route path={path.reservation.path}>
        <Reservation />
      </Route>
      <Route path={path.notice.path}>
        <Notice />
      </Route>
      <Route path={path.tour.path}>
        <Tour />
      </Route>
      <Route path={path.map.path}>
        <Map />
      </Route>
    </Switch>
  );
};

export default Routes;

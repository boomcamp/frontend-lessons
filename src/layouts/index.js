import React from 'react';
import { Router } from '@reach/router';
import { Global, css } from '@emotion/core';

import Authentication from '../components/authentication.js';
import PrivateRoute from '../components/PrivateRoute.js';
import Docs from '../templates/docs.js';
import Login from '../pages/login.js';

export default props => {
  const { children } = props;
  return (
    <Authentication.Provider>
      <Router>
        <Login path="login" />
        <PrivateRoute path="/" component={Docs} {...props} />
      </Router>
    </Authentication.Provider>
  );
};

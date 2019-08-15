import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import Authentication from '../components/authentication.js';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { authenticated, authClient } = React.useContext(
    Authentication.Consumer
  );

  if (!authenticated()) {
    navigate('/login');
  }

  return <Component location {...rest} />;
};

export default PrivateRoute;

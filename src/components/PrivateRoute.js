import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import { AuthContext } from '../components/authentication.js';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { isSignedIn} = React.useContext(AuthContext);

  if (!isSignedIn) {
    navigate('/login');
  }

  return <Component location {...rest} />;
};

export default PrivateRoute;

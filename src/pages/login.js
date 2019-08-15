import React from 'react';
import { navigate } from 'gatsby';
import styled from 'react-emotion';
import GoogleLogin from 'react-google-login';

import Authentication from '../components/authentication.js';

const LoginContainer = styled('div')`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  const { authenticated, login } = React.useContext(Authentication.Consumer);

  return authenticated() ? (
    navigate('/')
  ) : (
    <LoginContainer>
      <h1> Welcome to the Boom.Camp Frontend course </h1>
      <p>
        You can access the course materials by logging in with your @boom.camp
        google account
      </p>
      <button onClick={login}>Access Course</button>
    </LoginContainer>
  );
};

export default Login;

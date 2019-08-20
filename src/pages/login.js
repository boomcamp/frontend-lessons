import React from 'react';
import { navigate } from 'gatsby';
import styled from 'react-emotion';

import { AuthContext } from '../components/authentication.js';

const LoginContainer = styled('div')`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  const { isSignedIn, login } = React.useContext(
    AuthContext
  );

  React.useEffect(() => {
    if (isSignedIn) {
      navigate('/');
    }
  }, [isSignedIn]);

  return (
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

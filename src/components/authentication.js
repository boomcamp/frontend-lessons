import React from 'react';
import styled from 'react-emotion';
import { navigate } from 'gatsby';
import { useAsync } from 'react-async-hook';

import { getAuth } from '../util/googleAuth.js';
import Loader from '../components/Loader.js';

export const AuthContext = React.createContext('authentication');

const CenterContent = styled('div')`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function getUserProfile(user) {
  const profile = user.getBasicProfile();

  return {
    googleId: profile.getId(),
    imageUrl: profile.getImageUrl(),
    email: profile.getEmail(),
    name: profile.getName(),
    givenName: profile.getGivenName(),
    familyName: profile.getFamilyName(),
  };
}

const CenteredLoader = () => (
  <CenterContent>
    <Loader />
  </CenterContent>
);

const Authentication = ({ children }) => {
  const [authClient, setAuthClient] = React.useState(undefined);
  const [values, setValues] = React.useState({});
  const client = useAsync(() => getAuth('auth2'), []);

  React.useEffect(() => {
    if (!client.loading) {
      setAuthClient(client.result);
      setValues({ isSignedIn: client.result.isSignedIn.get() });
    }
  }, [client.loading]);

  React.useEffect(() => {
    if (values.isSignedIn) {
      setValues({
        ...values,
        userProfile: getUserProfile(client.result.currentUser.get()),
      });
    } else {
      navigate('/login');
    }
  }, [values.isSignedIn]);

  function login() {
    return authClient.signIn({ prompt: 'select_account' }).then(user =>
      setValues({
        ...values,
        isSignedIn: true,
        userProfile: getUserProfile(user),
      })
    );
  }

  function logout() {
    authClient.signOut();
    setValues({...values, isSignedIn: false})
  }

  return (
    <AuthContext.Provider
      value={{
        ...values,
        login,
        logout,
      }}
    >
      {!authClient ? <CenteredLoader /> : children}
    </AuthContext.Provider>
  );
};

Authentication.Consumer = AuthContext.Consumer;
Authentication.Provider = Authentication;

export default Authentication;

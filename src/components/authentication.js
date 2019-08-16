import React from 'react';
import styled from 'react-emotion';

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

class Authentication extends React.Component {
  state = {
    authClient: undefined,
    value: {},
  };

  componentDidMount() {
    getAuth('auth2').then(client => {
      let value = {};
      this.setState({ authClient: client });
      if (client.isSignedIn.get()) {
        value.userProfile = getUserProfile(client.currentUser.get());
      }
      this.setState({ value: { ...value } });
    });
  }

  authenticated = () => {
    if (!this.state.authClient) {
      return false;
    }

    return this.state.authClient.isSignedIn.get();
  };

  login = () => {
    return this.state.authClient.signIn({ prompt: 'select_account' }).then(user => {
      this.setState({
        value: {
          ...this.state.value,
          userProfile: getUserProfile(user),
        },
      });
    });
  };

  disconnect = () => {
    this.state.authClient.disconnect();
  };

  signOut = () => {
    return this.state.authClient.signOut()
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state.value,
          authenticated: this.authenticated,
          login: this.login,
          signOut: this.signOut,
          disconnect: this.disconnect,
        }}
      >
        {!!this.state.authClient ? this.props.children : <CenteredLoader />}
      </AuthContext.Provider>
    );
  }
}

Authentication.Consumer = AuthContext.Consumer;
Authentication.Provider = Authentication;

export default Authentication;

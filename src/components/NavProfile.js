import React from 'react';
import { css } from '@emotion/core';
import styled from 'react-emotion';

import ProfileImg from './images/ProfileImg.js';
import { AuthContext } from './authentication.js';

const ProfileContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-height: 75px;
  align-items: center;
  color: white;
  overflow-y: hidden;
`;

const LogoutContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  height: 100px;
`;

const LogoutButton = styled('button')`
  color: black;
`

const NavProfile = ({ imageUrl, name }) => {
  const { logout } = React.useContext(AuthContext)

  return (
    <ProfileContainer>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex: 1 0 auto;
          transform: translateY(100px);
          transition: transform 0.5s ease;
          &:hover {
            transform: translateY(15px);
          }
        `}
      >
        <ProfileImg url={imageUrl} />
        <span>Hello, {name}</span>
        <LogoutContainer>
          <LogoutButton onClick={logout}>Logout</LogoutButton>
        </LogoutContainer>
      </div>
    </ProfileContainer>
  );
};

export default NavProfile;

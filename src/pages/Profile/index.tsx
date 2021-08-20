import React from 'react';

import { 
  Container,
  Main,
  LeftSide,
  RightSide
} from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'laisbastosbg'}
            name={'Lais Godinho'}
            avatarUrl={'https://avatars.githubusercontent.com/u/47223072?v=4'}
            followers={16}
            following={34}
            company={'Pinheiro Supermercados'}
            location={'Fortaleza, Ceará'}
            email={'lais2bg@gmail.com'}
            blog={undefined}
          />
        </LeftSide>
        <RightSide>

        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;

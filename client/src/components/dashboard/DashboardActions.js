import React from 'react';
import { Button } from 'react-bootstrap';
import ButtonStyles from '../styles/ButtonStyles';
import styled from 'styled-components';
import { device } from '../styles/device';


const MediaQueries = styled.div`
  @media ${device.mobileS} {
    .btn-submit {
      font-size: 1.4rem;
    }
  }

  @media ${device.tabletS} {
    .btn-submit {
      font-size: 1.8rem;
    }
  }

  @media ${device.laptop} {
    .btn-submit {
      font-size: 2rem;
    }
  }
`;

const DashboardActions = () => {
  return (
    <div>
      <MediaQueries>
        <ButtonStyles>
          <Button variant="submit" href='edit-profile'>
            Edit Profile
          </Button>
        </ButtonStyles>
      </MediaQueries>
    </div>
  );
};

export default DashboardActions;
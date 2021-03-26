import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layouts/Spinner';
import DashboardActions from './DashboardActions';
import styled from 'styled-components';
import { device } from '../styles/device';
import { Button } from 'react-bootstrap';
import ButtonStyles from '../styles/ButtonStyles';
import TextStyles from '../styles/TextStyles';


const MediaQueries = styled.div`
  @media ${device.mobileS} {
    h3 {
      font-size: 2rem;
    }
    p, a {
      font-size: 1.4rem;
    }
    button.btn-submit {
      font-size: 1.4rem;
    }
    .link-standard {
      font-size: 1.4rem
    }
    .btn-show-vsmall {
      font-size: 1rem;
    }
  }

  @media ${device.tabletS} {
    h3 {
      font-size: 2.6rem;
    }
    a, p {
      font-size: 1.8rem;
    }
    button.btn-submit {
      font-size: 1.8rem;
    }
    .link-standard {
      font-size: 1.8rem
    }
    .btn-show-vsmall {
      font-size: 1.2rem;
    }
  }

  @media ${device.laptop} {
    h3 {
      font-size: 3rem;
    }
    a, p, li {
      font-size: 2rem;
    }
    button.btn-submit {
      font-size: 2rem;
    }
    .btn-show-vsmall {
      font-size: 1.6rem;
    }
  }
`;

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);


  return loading && profile === null ? (

    <Spinner />
  ) : (
    <MediaQueries>
      <TextStyles>
        <ButtonStyles>
          <h3>Welcome, {user && user.name}!</h3>
          <br></br><br></br>
          { profile !== null ?
            <>
              <div>
                <h3>
                  Your current bio:
                </h3>
                <p>{profile.bio}</p>
              </div>
              <br></br><br></br>
              <div>
                <h3>
                  Your current interests:
                </h3>
                <br></br>
                <ul className='inline'>
                  {profile.interests.map( i =>
                    <li key={i} className='list-button'><Button variant='show-vsmall'>{i}</Button>&nbsp;&nbsp;</li>
                  )}
                </ul>
              </div>
              <br></br><br></br><br></br>
              <DashboardActions />
            </>
            :
            <>
              <p>You have not set up a profile. Please add some info ...</p>
              <br></br>
              <Button variant="submit" href='create-profile'>
                Create Profile
              </Button>
            </>
          }
        </ButtonStyles>
      </TextStyles>
    </MediaQueries>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStatetoProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStatetoProps, { getCurrentProfile })(Dashboard);

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import {Button} from 'react-bootstrap';
import styled from 'styled-components';
import { device } from '../styles/device';
import ButtonStyles from '../styles/ButtonStyles';
import TextStyles from '../styles/TextStyles';


const MediaQueries = styled.div`
  @media ${device.mobileS} {
    p, a {
      font-size: 1.4rem;
    }
    .btn-submit {
      font-size: 1.4rem;
    }
    .btn-submit-sm {
      font-size: 1.2rem;
    }
    .font-v-sm {
      font-size: .8rem;
    }
  }

  @media ${device.tabletS} {
    a, p {
      font-size: 1.8rem;
    }
    .btn-submit {
      font-size: 1.8rem;
    }
    .btn-submit-sm {
      font-size: 1.6rem;
    }
  }

  @media ${device.laptop} {
    a, p, li {
      font-size: 2rem;
    }
    .btn-submit {
      font-size: 2rem;
    }
    .btn-submit-sm {
      font-size: 1.8rem;
    }
    .font-v-sm {
      font-size: 1.2rem;
    }
  }
`;

const ProfileInput = ( { createProfile, history } ) => {

  const [formData, setFormData] = useState({
    bio: '',
    interests: []
  });

  const { bio, interests } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name] : e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    createProfile( formData, history, false );
  };

  return (
    <MediaQueries>
      <TextStyles>
        <ButtonStyles>
          <p>Create A Profile</p>
          <br></br><br></br>
          <form className="form" onSubmit={ e => onSubmit(e)}>
            <div className="form-group">
              <p>Let us know a little about you!</p>
              <textarea
                id='bio'
                name='bio'
                placeholder="A short bio of yourself"
                rows='3'
                cols='50'
                value={bio}
                style={{ fontSize: '1.6rem' }}
                onChange={ e => onChange(e)}
              >
              </textarea>
            </div>
            <div className="form-group">
              <input
                id='interests'
                name='interests'
                type="text"
                placeholder="What are some of your interests?"
                size='50'
                value={interests}
                onChange={ e => onChange(e)}
              />
              <p className="form-text font-v-sm">Please use comma-separated values (eg.
                a, b, c)
              </p>
              <br></br>
            </div>

            <Button type='submit' variant="submit" value="submit">Submit</Button>
            <br></br><br></br><br></br>
            <Button variant="submit-sm" href="dashboard">Go Back</Button>
          </form>
        </ButtonStyles>
      </TextStyles>
    </MediaQueries>
  );
};

ProfileInput.propTypes = {
  createProfile: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default connect (null, { createProfile })(withRouter(ProfileInput));
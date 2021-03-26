import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import TextStyles from '../styles/TextStyles';
import ButtonStyles from '../styles/ButtonStyles';
import styled from 'styled-components';
import { device } from '../styles/device';


const MediaQueries = styled.div`
  @media ${device.mobileS} {
    p, a {
      font-size: 1.4rem;
    }
    .btn-submit-sm {
      font-size: 1.2rem;
    }
    .link-standard {
      font-size: 1.4rem
    }
  }

  @media ${device.tabletS} {
    a, p {
      font-size: 1.8rem;
    }
    .btn-submit-sm {
      font-size: 1.6rem;
    }
    .link-standard {
      font-size: 1.8rem
    }
  }

  @media ${device.laptop} {
    a, p, li {
      font-size: 2rem;
    }
    .btn-submit-sm {
      font-size: 1.8rem;
    }
  }
`;

const Register = ({ setAlert, register, isAuthenticated }) => {

  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2){
      setAlert('The passwords don\'t match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if(isAuthenticated){
    return <Redirect to='/dashboard' />;
  }

  return (
    <MediaQueries>
      <TextStyles>
        <ButtonStyles>

          <p className="lead"><i className="fas fa-user"></i> Create An Account</p>
          <br></br>

          <form className="form" onSubmit={ e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={e => onChange(e)} required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={e => onChange(e)} required
              />
              <br></br>

              {/* <small className="form-text">
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
              </small> */}

            </div>
            <br></br>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"
                value={password}
                onChange={e => onChange(e)} required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                minLength="6"
                value={password2}
                onChange={e => onChange(e)} required
              />
            </div>
            <Button type='submit' variant="submit-sm" value="register">Register</Button>
          </form>
          <br></br>

          <p className="my-1">
            Already have an account? <Link className='link-standard' to='/login'><strong>Log In</strong></Link>
          </p>
        </ButtonStyles>
      </TextStyles>
    </MediaQueries>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStatetoProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStatetoProps, { setAlert, register })(Register);
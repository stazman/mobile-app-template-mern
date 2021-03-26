import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../actions/auth';
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

const Login = ({login, isAuthenticated}) => {

  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if(isAuthenticated){
    return <Redirect to='/dashboard' />;
  }

  return (
    <MediaQueries>
      <TextStyles>
        <ButtonStyles>
          <p className="lead"><i className="fas fa-user"></i>Log in to Your Account</p>
          <br></br>
          <form className="form" onSubmit={ e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={e => onChange(e)} required
              />
            </div>
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
            <Button type='submit' variant="submit-sm" value="Login">Log in</Button>
          </form>
          <br></br>
          <p>
            Don&lsquo;t have an account? <Link className='link-standard' to={'/register'}><strong>Sign Up</strong></Link>
          </p>
        </ButtonStyles>
      </TextStyles>
    </MediaQueries>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStatetoProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStatetoProps, { login })(Login);
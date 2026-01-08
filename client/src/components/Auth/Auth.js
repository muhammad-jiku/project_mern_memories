import GoogleIcon from '@mui/icons-material/Google';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signin, signup } from '../../actions/auth';
import { googleSignIn } from '../../api/index';
import { AUTH } from '../../constants/actionTypes';
import Input from './Input';
import useStyles from './styles';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, navigate));
    } else {
      dispatch(signin(form, navigate));
    }
  };

  const googleSuccess = async (credentialResponse) => {
    const token = credentialResponse?.credential;
    try {
      const decoded = jwtDecode(token);
      // Send to backend to create/find user and get app token
      const { data } = await googleSignIn({ ...decoded, token });
      dispatch({ type: AUTH, data });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = (error) => {
    console.log('Google Sign In was unsuccessful. Try again later', error);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          {isSignup ? 'Sign up' : 'Sign in'}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name='firstName'
                  label='First Name'
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name='lastName'
                  label='Last Name'
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name='email'
              label='Email Address'
              handleChange={handleChange}
              type='email'
            />
            <Input
              name='password'
              label='Password'
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name='confirmPassword'
                label='Repeat Password'
                handleChange={handleChange}
                type='password'
              />
            )}
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              margin: '16px 0',
            }}
          >
            <div style={{ flex: 1, borderBottom: '1px solid #e0e0e0' }} />
            <span
              style={{
                margin: '0 16px',
                color: '#888',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              OR
            </span>
            <div style={{ flex: 1, borderBottom: '1px solid #e0e0e0' }} />
          </div>
          <div className={classes.googleButton}>
            <GoogleLogin
              onSuccess={googleSuccess}
              onError={googleError}
              useOneTap={false}
              render={(renderProps) => (
                <button
                  type='button'
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    background: '#fff',
                    border: '1px solid #e0e0e0',
                    borderRadius: 4,
                    padding: '10px 16px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#444',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                    marginBottom: 0,
                  }}
                >
                  <GoogleIcon
                    style={{ fontSize: 24, marginRight: 16, color: '#4285F4' }}
                  />
                  <span style={{ marginLeft: 0, color: '#4285F4' }}>
                    Sign in with Google
                  </span>
                </button>
              )}
            />
          </div>
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              marginTop: 16,
              fontSize: '1rem',
              color: '#666',
            }}
          >
            {isSignup ? (
              <span>
                Already have an account?{' '}
                <button
                  type='button'
                  onClick={switchMode}
                  style={{
                    border: 'none',
                    background: 'none',
                    color: '#667eea',
                    fontWeight: 500,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    padding: 0,
                    textDecoration: 'underline',
                  }}
                >
                  Sign in
                </button>
              </span>
            ) : (
              <span>
                Don't have an account?{' '}
                <button
                  type='button'
                  onClick={switchMode}
                  style={{
                    border: 'none',
                    background: 'none',
                    color: '#667eea',
                    fontWeight: 500,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    padding: 0,
                    textDecoration: 'underline',
                  }}
                >
                  Sign Up
                </button>
              </span>
            )}
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;

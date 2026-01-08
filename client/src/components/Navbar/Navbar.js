import { AppBar, Avatar, Button, Typography } from '@mui/material';
import { jwtDecode } from 'jwt-decode';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import * as actionType from '../../constants/actionTypes';
import memoriesLogo from '../../images/memoriesLogo.png';
import memoriesText from '../../images/memoriesText.png';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();

  const logout = useCallback(() => {
    dispatch({ type: actionType.LOGOUT });

    navigate('/auth');

    setUser(null);
  }, [dispatch, navigate]);

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location, logout, user?.token]);

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <Link to='/' className={classes.brandContainer}>
        <img src={memoriesText} alt='Memories' />
        <img className={classes.image} src={memoriesLogo} alt='icon' />
      </Link>
      <div className={classes.toolbar}>
        {user?.result ? (
          <div
            className={classes.profile}
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/posts/create')}
          >
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={user?.result.imageUrl || user?.result.picture}
            >
              {user?.result.name?.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant='h6'>
              {user?.result.name}
            </Typography>
            <Button
              variant='contained'
              className={classes.logout}
              color='secondary'
              onClick={(e) => {
                e.stopPropagation();
                logout();
              }}
              size='medium'
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to='/auth'
            variant='contained'
            color='primary'
            size='medium'
          >
            Sign In
          </Button>
        )}
      </div>
    </AppBar>
  );
};

export default Navbar;

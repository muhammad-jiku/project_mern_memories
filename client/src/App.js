import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import PostDetails from './components/PostDetails/PostDetails';

import Create from './components/Create/Create';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#667eea',
      light: '#8b9df8',
      dark: '#4c63d2',
    },
    secondary: {
      main: '#f093fb',
      light: '#f5b4ff',
      dark: '#d76ee3',
    },
    gradient: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      '@media (max-width:960px)': {
        fontSize: '2rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
      '@media (max-width:960px)': {
        fontSize: '1.875rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      '@media (max-width:960px)': {
        fontSize: '1.75rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.375rem',
      },
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
      '@media (max-width:960px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      '@media (max-width:960px)': {
        fontSize: '1.25rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.125rem',
      },
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      '@media (max-width:960px)': {
        fontSize: '1.125rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    body1: {
      fontSize: '1rem',
      '@media (max-width:960px)': {
        fontSize: '0.9375rem',
      },
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
    },
    body2: {
      fontSize: '0.875rem',
      '@media (max-width:960px)': {
        fontSize: '0.8125rem',
      },
      '@media (max-width:600px)': {
        fontSize: '0.75rem',
      },
    },
    button: {
      fontSize: '0.9375rem',
      fontWeight: 500,
      textTransform: 'none',
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
    },
  },
});

const AppRoutes = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <Container
      maxWidth='xl'
      sx={{
        paddingLeft: { xs: '10px', sm: '16px', md: '24px' },
        paddingRight: { xs: '10px', sm: '16px', md: '24px' },
      }}
    >
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/posts' replace />} />
        <Route path='/posts' element={<Home />} />
        <Route path='/posts/:id' element={<PostDetails />} />
        <Route path='/creators/:name' element={<CreatorOrTag />} />
        <Route path='/tags/:name' element={<CreatorOrTag />} />
        <Route
          path='/posts/create'
          element={user ? <Create /> : <Navigate to='/auth' replace />}
        />
        <Route
          path='/auth'
          element={user ? <Navigate to='/posts' replace /> : <Auth />}
        />
      </Routes>
    </Container>
  );
};

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;

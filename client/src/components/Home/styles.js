import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: '12px',
    marginBottom: '2rem',
    display: 'flex',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)',
    [theme.breakpoints.down('lg')]: {
      padding: '18px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '16px',
      marginBottom: '1.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '14px',
      marginBottom: '1rem',
      borderRadius: '8px',
    },
  },
  searchIcon: {
    padding: '12px',
    '&:hover': {
      backgroundColor: 'rgba(102, 126, 234, 0.1)',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '8px',
    },
  },
  tagChip: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important',
    color: 'white !important',
    fontWeight: 500,
    '& .MuiChip-deleteIcon': {
      color: 'rgba(255, 255, 255, 0.8) !important',
      '&:hover': {
        color: 'white !important',
      },
    },
  },
  memoryChip: {
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%) !important',
    color: 'white !important',
    fontWeight: 500,
    '& .MuiChip-deleteIcon': {
      color: 'rgba(255, 255, 255, 0.8) !important',
      '&:hover': {
        color: 'white !important',
      },
    },
  },
  pagination: {
    borderRadius: '12px',
    padding: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem auto 1rem',
    maxWidth: '600px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)',
    [theme.breakpoints.down('md')]: {
      padding: '14px',
      margin: '1.5rem auto 1rem',
      maxWidth: '500px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '12px',
      margin: '1rem auto 0.5rem',
      maxWidth: '100%',
      borderRadius: '8px',
    },
  },
  gridContainer: {
    [theme.breakpoints.down('sm')]: {
      '& > .MuiGrid-item': {
        paddingTop: '12px !important',
      },
    },
  },
}));

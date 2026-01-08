import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex !important',
    flexDirection: 'row !important',
    justifyContent: 'space-between !important',
    alignItems: 'center !important',
    padding: '10px 50px !important',
    background:
      'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)',
    boxShadow: '0 4px 20px rgba(102, 126, 234, 0.1)',
    [theme.breakpoints.down('lg')]: {
      padding: '10px 40px !important',
      margin: '25px 0',
    },
    [theme.breakpoints.down('md')]: {
      padding: '10px 30px !important',
      margin: '20px 0',
      borderRadius: 12,
    },
    [theme.breakpoints.down('sm')]: {
      padding: '8px 15px !important',
      margin: '15px 0',
      borderRadius: 10,
    },
    [theme.breakpoints.down('xs')]: {
      padding: '6px 10px !important',
      margin: '10px 0',
      borderRadius: 8,
    },
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300,
    [theme.breakpoints.down('md')]: {
      fontSize: '1.75em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2em',
    },
  },
  image: {
    marginLeft: '10px',
    height: '40px',
    display: 'block',
    [theme.breakpoints.down('md')]: {
      marginLeft: '8px',
      height: '35px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '4px',
      height: '25px',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '3px',
      height: '20px',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 'auto',
    minHeight: 'auto !important',
    padding: '0 !important',
  },
  profile: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '15px',
    [theme.breakpoints.down('md')]: {
      gap: '12px',
    },
    [theme.breakpoints.down('sm')]: {
      gap: '8px',
    },
    [theme.breakpoints.down('xs')]: {
      gap: '6px',
    },
  },
  logout: {
    marginLeft: '20px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '15px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '8px',
      padding: '4px 12px',
      fontSize: '0.8rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '5px',
      padding: '4px 8px',
      fontSize: '0.75rem',
    },
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 600,
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.85rem',
      display: 'none',
    },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    gap: '10px',
    [theme.breakpoints.down('sm')]: {
      gap: '6px',
    },
    [theme.breakpoints.down('xs')]: {
      gap: '4px',
    },
    '& img:first-of-type': {
      height: '45px',
      display: 'block',
      [theme.breakpoints.down('md')]: {
        height: '40px',
      },
      [theme.breakpoints.down('sm')]: {
        height: '30px',
      },
      [theme.breakpoints.down('xs')]: {
        height: '25px',
      },
    },
  },
  purple: {
    color: '#fff',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    width: '40px',
    height: '40px',
    fontSize: '1.2rem',
    fontWeight: 600,
    [theme.breakpoints.down('md')]: {
      width: '36px',
      height: '36px',
      fontSize: '1.1rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '28px',
      height: '28px',
      fontSize: '0.9rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '24px',
      height: '24px',
      fontSize: '0.8rem',
    },
  },
}));

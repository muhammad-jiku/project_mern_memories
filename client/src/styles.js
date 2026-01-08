import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('md')]: {
      margin: '25px 0',
      padding: '10px 15px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '20px 0',
      padding: '10px',
      borderRadius: 10,
    },
  },
  heading: {
    color: 'rgba(0, 183, 255, 1)',
    fontWeight: 600,
    textDecoration: 'none',
    fontSize: '2em',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.8em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2em',
    },
  },
  image: {
    marginLeft: '15px',
    height: '60px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '12px',
      height: '50px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      height: '40px',
    },
  },
  mainContainer: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
}));

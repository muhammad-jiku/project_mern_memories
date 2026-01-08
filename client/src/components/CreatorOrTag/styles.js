import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  header: {
    borderRadius: '15px',
    padding: theme.spacing(4),
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    fontSize: '2.5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  subtitle: {
    fontSize: '1.1rem',
    opacity: 0.9,
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  divider: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    height: '2px',
    margin: `${theme.spacing(2)}px auto`,
    width: '100px',
  },
  paper: {
    borderRadius: '15px',
    padding: theme.spacing(4),
    textAlign: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
  },
}));

import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(0.75),
      },
    },
  },
  paper: {
    padding: theme.spacing(2),
    background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1.75),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.5),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '8px 0',
    },
  },
  buttonSubmit: {
    marginBottom: 10,
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: 8,
    },
  },
  formTitle: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '12px',
  },
}));

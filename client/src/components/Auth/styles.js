import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    borderRadius: '15px',
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      padding: theme.spacing(2.5),
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2),
    },
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(0.75),
      },
    },
  },
  avatar: {
    margin: theme.spacing(1),
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  submit: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    width: '100%',
    '&:hover': {
      background: 'linear-gradient(135deg, #5568d3 0%, #63428a 100%)',
    },
  },
  googleButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > div': {
      width: '100% !important',
      minWidth: '100% !important',
      maxWidth: '100% !important',
      display: 'flex',
      justifyContent: 'center',
    },
    '& iframe': {
      width: '100% !important',
      minWidth: '100% !important',
      maxWidth: '100% !important',
    },
  },
  switchButton: {
    color: theme.palette.primary.main,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'rgba(102, 126, 234, 0.08)',
    },
  },
  orDividerContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '8px 0',
  },
  orDivider: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #e0e0e0',
    lineHeight: '0.1em',
    margin: '16px 0 16px 0',
    position: 'relative',
    '& span': {
      background: '#fff',
      padding: '0 16px',
      color: '#888',
      fontSize: '1rem',
      position: 'relative',
      top: '-0.7em',
    },
  },
  switchTextContainer: {
    width: '100%',
    textAlign: 'center',
    marginTop: theme.spacing(2),
    fontSize: '1rem',
    color: '#666',
    '& button': {
      padding: 0,
      minWidth: 0,
      fontSize: '1rem',
      fontWeight: 500,
      color: theme.palette.primary.main,
      textTransform: 'none',
      background: 'none',
      marginLeft: 4,
      marginRight: 4,
      verticalAlign: 'baseline',
    },
  },
}));

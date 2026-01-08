import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  createPageBg: {
    minHeight: 'calc(100vh - 64px)',
    width: '100%',
    maxWidth: '100vw',
    boxSizing: 'border-box',
    padding: '32px 0',
    // background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflowX: 'hidden',
    [theme.breakpoints.down('md')]: {
      padding: '24px 0',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '16px 0',
    },
  },
  paper: {
    padding: theme.spacing(3),
    maxWidth: 600,
    width: '100%',
    margin: 'auto',
    boxSizing: 'border-box',
    borderRadius: '20px',
    background: 'rgba(0, 0, 0, 0)',
    boxShadow: '0 4px 24px rgba(102,126,234,0.08)',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
      borderRadius: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.5),
      borderRadius: '12px',
    },
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 700,
  },
}));

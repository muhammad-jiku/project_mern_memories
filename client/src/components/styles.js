import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  ul: {
    justifyContent: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    '& .MuiPaginationItem-root': {
      fontSize: '1rem',
      fontWeight: 500,
      minWidth: '40px',
      height: '40px',
      borderRadius: '8px',
      [theme.breakpoints.down('md')]: {
        fontSize: '0.9rem',
        minWidth: '36px',
        height: '36px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.85rem',
        minWidth: '32px',
        height: '32px',
        borderRadius: '6px',
      },
    },
  },
}));

import { Box, Paper } from '@mui/material';
import Form from '../Form/Form';
import useStyles from './styles';

const Create = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.createPageBg}
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='calc(100vh - 64px)'
      sx={{
        boxSizing: 'border-box',
        padding: { xs: '16px', sm: '32px', md: '48px' },
      }}
    >
      <Paper elevation={6} className={classes.paper}>
        <Form currentId={0} setCurrentId={() => {}} />
      </Paper>
    </Box>
  );
};

export default Create;

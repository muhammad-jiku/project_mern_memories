import {
  Container,
  Divider,
  Grid,
  Grow,
  Paper,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { getPostsByCreator, getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import useStyles from './styles';

const CreatorOrTag = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  const location = useLocation();

  const isCreatorPage = location.pathname.includes('/creators/');
  const isTagPage = location.pathname.includes('/tags/');

  useEffect(() => {
    if (isCreatorPage) {
      dispatch(getPostsByCreator(name));
    } else if (isTagPage) {
      dispatch(getPostsBySearch({ search: 'none', tags: name }));
    }
  }, [dispatch, name, isCreatorPage, isTagPage]);

  if (!posts?.length && !isLoading) {
    return (
      <Grow in>
        <Container maxWidth='xl'>
          <Paper className={classes.paper} elevation={6}>
            <Typography variant='h4' className={classes.title}>
              No posts found
            </Typography>
            <Typography variant='body1' className={classes.subtitle}>
              {isCreatorPage
                ? `No posts by ${name} yet`
                : `No posts with tag #${name} yet`}
            </Typography>
          </Paper>
        </Container>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Container maxWidth='xl'>
        <Grid container spacing={3} className={classes.container}>
          {/* Header Section */}
          <Grid item xs={12}>
            <Paper className={classes.header} elevation={6}>
              <Typography variant='h4' className={classes.title}>
                {isCreatorPage ? `Posts by ${name}` : `Posts tagged #${name}`}
              </Typography>
              <Divider className={classes.divider} />
              <Typography variant='body1' className={classes.subtitle}>
                {isLoading
                  ? 'Loading posts...'
                  : `${posts?.length || 0} ${
                      posts?.length === 1 ? 'post' : 'posts'
                    } found`}
              </Typography>
            </Paper>
          </Grid>

          {/* Posts Section */}
          <Grid item xs={12}>
            <Posts />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default CreatorOrTag;

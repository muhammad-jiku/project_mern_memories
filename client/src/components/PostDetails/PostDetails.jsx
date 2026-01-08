/* eslint-disable jsx-a11y/alt-text */
import {
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { getPost, getPostsBySearch } from '../../actions/posts';
import CommentSection from './CommentSection';
import useStyles from './styles';

dayjs.extend(relativeTime);

const Post = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: 'none', tags: post?.tags.join(',') })
      );
    }
  }, [dispatch, post]);

  if (!post) return null;

  const openPost = (_id) => navigate.push(`/posts/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size='7em' />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <>
      <Paper className={classes.paper} elevation={6}>
        {/* Image Section - Always on top */}
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              post.selectedFile ||
              'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
            }
            alt={post.title}
          />
        </div>

        {/* Content Section - Below image */}
        <div className={classes.section}>
          {/* 1. Creator */}
          <Typography variant='h6' className={classes.creatorText}>
            Created by:{' '}
            <Link
              to={`/creators/${post.name}`}
              style={{ textDecoration: 'none' }}
              className={classes.creatorText}
            >
              {post.name}
            </Link>
          </Typography>

          {/* 2. Time */}
          <Typography variant='body1' className={classes.timeText} gutterBottom>
            {dayjs(post.createdAt).fromNow()}
          </Typography>

          {/* 3. Title */}
          <Typography variant='h3' component='h2' className={classes.titleText}>
            {post.title}
          </Typography>

          {/* 4. Description */}
          <Typography
            gutterBottom
            variant='body1'
            component='p'
            className={classes.descriptionText}
          >
            {post.message}
          </Typography>

          {/* 5. Tags */}
          <div className={classes.tagContainer}>
            {post.tags.map((tag) => (
              <Link
                key={tag}
                to={`/tags/${tag}`}
                className={classes.tag}
                style={{ textDecoration: 'none' }}
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </Paper>

      {!!recommendedPosts.length && (
        <div className={classes.recommendedSection}>
          <Typography
            gutterBottom
            variant='h5'
            className={classes.sectionTitle}
          >
            You might also like:
          </Typography>
          <Divider />
          <Grid container spacing={3} className={classes.recommendedPosts}>
            {recommendedPosts.map(
              ({ title, name, message, likes, selectedFile, _id }) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={_id}>
                  <Paper
                    className={classes.recommendedCard}
                    onClick={() => navigate(`/posts/${_id}`)}
                    elevation={3}
                  >
                    <img
                      src={selectedFile}
                      alt={title}
                      className={classes.recommendedImage}
                    />
                    <div className={classes.recommendedContent}>
                      <Typography
                        gutterBottom
                        variant='h6'
                        className={classes.recommendedTitle}
                      >
                        {title}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant='subtitle2'
                        color='textSecondary'
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant='body2'
                        className={classes.recommendedMessage}
                      >
                        {message.length > 60
                          ? `${message.substring(0, 60)}...`
                          : message}
                      </Typography>
                      <Typography
                        variant='subtitle2'
                        color='primary'
                        className={classes.recommendedLikes}
                      >
                        {likes.length} {likes.length === 1 ? 'Like' : 'Likes'}
                      </Typography>
                    </div>
                  </Paper>
                </Grid>
              )
            )}
          </Grid>
        </div>
      )}

      {/* Comment Section - Below everything */}
      <div className={classes.commentSection}>
        <CommentSection post={post} />
      </div>
    </>
  );
};

export default Post;

import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';
import {
  Avatar,
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deletePost, likePost } from '../../../actions/posts';
import useStyles from './styles';

dayjs.extend(relativeTime);

const Post = ({ post, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(post?.likes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const userId = user?.result?.googleId || user?.result?._id;
  const hasLikedPost = post?.likes?.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId) ? (
        <>
          <ThumbUpAltIcon fontSize='small' />
          &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} like${likes.length > 1 ? 's' : ''}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize='small' />
          &nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize='small' />
        &nbsp;Like
      </>
    );
  };

  const openPost = (e) => {
    // dispatch(getPost(post._id, navigate));

    navigate(`/posts/${post._id}`);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      {/* Section 1: Image */}
      <ButtonBase
        component='span'
        name='test'
        className={classes.imageButton}
        onClick={openPost}
      >
        <div className={classes.imageWrapper}>
          <img
            src={
              post.selectedFile ||
              'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
            }
            alt={post.title}
          />
        </div>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <div className={classes.editButton}>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentId(post._id);
              }}
              style={{ color: 'white' }}
              size='small'
            >
              <MoreHorizIcon fontSize='default' />
            </Button>
          </div>
        )}
      </ButtonBase>

      {/* Section 2: Profile (Avatar, Name, Time) */}
      <div className={classes.profileSection}>
        <Avatar className={classes.avatar} alt={post.name} src={post.name}>
          {post.name.charAt(0)}
        </Avatar>
        <div className={classes.profileInfo}>
          <Typography
            variant='subtitle1'
            className={classes.authorName}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/creators/${post.name}`);
            }}
            style={{ cursor: 'pointer' }}
          >
            {post.name}
          </Typography>
          <Typography variant='caption' className={classes.timeAgo}>
            {dayjs(post.createdAt).fromNow()}
          </Typography>
        </div>
      </div>

      {/* Section 3: Description */}
      <CardContent className={classes.descriptionSection}>
        <Typography
          className={classes.title}
          gutterBottom
          variant='h6'
          component='h2'
        >
          {post.title}
        </Typography>
        <Typography variant='body2' className={classes.description}>
          {post.message.split(' ').splice(0, 20).join(' ')}...
        </Typography>
      </CardContent>

      {/* Section 4: Tags */}
      <div className={classes.tagsSection}>
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className={classes.tag}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/tags/${tag}`);
            }}
            style={{ cursor: 'pointer' }}
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Section 5: Like Buttons and Counts */}
      <CardActions className={classes.cardActions}>
        <Button
          size='small'
          color='primary'
          disabled={!user?.result}
          onClick={handleLike}
        >
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Button
            size='small'
            color='secondary'
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize='small' /> &nbsp; Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;

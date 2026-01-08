import { Button, TextField, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { commentPost } from '../../actions/posts';
import useStyles from './styles';

const CommentSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const [comments, setComments] = useState(post?.comments);
  const classes = useStyles();
  const commentsRef = useRef();

  const handleComment = async () => {
    const newComments = await dispatch(
      commentPost(`${user?.result?.name}: ${comment}`, post._id)
    );

    setComment('');
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        {/* Input field for comment at the top */}
        <div className={classes.commentInputSection}>
          <Typography
            gutterBottom
            variant='h6'
            className={classes.commentHeading}
          >
            Write a comment
          </Typography>
          <TextField
            fullWidth
            rows={4}
            variant='outlined'
            label='Comment'
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            style={{ marginTop: '10px' }}
            fullWidth
            disabled={!comment.length}
            color='primary'
            variant='contained'
            onClick={handleComment}
          >
            Comment
          </Button>
        </div>

        {/* All comments below */}
        <div className={classes.commentsInnerContainer}>
          <Typography
            gutterBottom
            variant='h6'
            className={classes.commentHeading}
          >
            Comments
          </Typography>
          {comments?.map((c, i) => (
            <Typography
              key={i}
              gutterBottom
              variant='subtitle1'
              className={classes.commentText}
            >
              <strong>{c.split(': ')[0]}</strong>
              {c.split(':')[1]}
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>
      </div>
    </div>
  );
};

export default CommentSection;

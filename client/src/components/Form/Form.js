import {
  Autocomplete,
  Button,
  Chip,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    tags: [],
    selectedFile: '',
  });
  const post = useSelector((state) =>
    currentId
      ? state.posts.posts.find((message) => message._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();

  const clear = useCallback(() => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: [], selectedFile: '' });
  }, [setCurrentId]);

  useEffect(() => {
    if (!post?.title) clear();
    if (post) setPostData(post);
  }, [clear, post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, navigate));
      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      clear();
    }
  };

  if (!user?.result?.name) {
    return null;
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostData({ ...postData, selectedFile: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6' className={classes.formTitle}>
          {currentId ? `Editing "${post?.title}"` : 'Creating a Memory'}
        </Typography>
        <TextField
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name='message'
          variant='outlined'
          label='Message'
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <div style={{ padding: '5px 0', width: '94%' }}>
          <Autocomplete
            multiple
            id='tags'
            options={[]}
            freeSolo
            value={postData.tags}
            onChange={(event, newValue) => {
              setPostData({ ...postData, tags: newValue });
            }}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant='outlined'
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant='outlined'
                label='Tags'
                placeholder='Add a tag'
              />
            )}
          />
        </div>
        <div className={classes.fileInput}>
          <input
            type='file'
            accept='image/*'
            onChange={handleFileChange}
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            type='submit'
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant='contained'
            color='secondary'
            size='small'
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;

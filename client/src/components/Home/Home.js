import SearchIcon from '@mui/icons-material/Search';
import {
  AppBar,
  Autocomplete,
  Chip,
  Container,
  Grid,
  Grow,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { getPosts, getPostsBySearch } from '../../actions/posts';
import Pagination from '../Pagination';
import Posts from '../Posts/Posts';
import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [searchTerms, setSearchTerms] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const searchPost = () => {
    // Combine chips and current input value
    const allTerms = [...searchTerms];
    if (inputValue.trim()) {
      allTerms.push(inputValue.trim());
    }

    if (allTerms.length > 0) {
      const tags = allTerms
        .filter((term) => term.startsWith('#'))
        .map((tag) => tag.slice(1));
      const memories = allTerms
        .filter((term) => !term.startsWith('#'))
        .join(' ');

      const searchQuery = memories.trim();
      const tagsQuery = tags.length > 0 ? tags.join(',') : '';

      // Only proceed if we have either memories or tags
      if (searchQuery || tagsQuery) {
        dispatch(
          getPostsBySearch({ search: searchQuery || 'none', tags: tagsQuery })
        );
      }
    } else {
      dispatch(getPosts(1));
    }
  };

  return (
    <Grow in>
      <Container maxWidth='xl'>
        <Grid container spacing={3} className={classes.gridContainer}>
          {/* Search Bar Section - Top */}
          <Grid item xs={12}>
            <AppBar
              className={classes.appBarSearch}
              position='static'
              color='inherit'
            >
              <Autocomplete
                multiple
                freeSolo
                fullWidth
                options={[]}
                value={searchTerms}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                onChange={(event, newValue) => {
                  setSearchTerms(newValue);
                  setInputValue('');
                  // If all chips are removed, clear search and show all posts
                  if (newValue.length === 0) {
                    dispatch(getPosts(1));
                  }
                }}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => {
                    const isTag = option.startsWith('#');
                    return (
                      <Chip
                        key={index}
                        variant='filled'
                        label={option}
                        {...getTagProps({ index })}
                        className={isTag ? classes.tagChip : classes.memoryChip}
                      />
                    );
                  })
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant='outlined'
                    label='Search Memories & Tags'
                    placeholder='Type memories or #tags'
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <>
                          {params.InputProps.endAdornment}
                          <InputAdornment position='end'>
                            <IconButton
                              onClick={searchPost}
                              edge='end'
                              color='primary'
                              className={classes.searchIcon}
                            >
                              <SearchIcon />
                            </IconButton>
                          </InputAdornment>
                        </>
                      ),
                    }}
                  />
                )}
              />
            </AppBar>
          </Grid>

          {/* Posts Section - Full Width */}
          <Grid item xs={12}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>

          {/* Pagination Section - Bottom Center */}
          {!searchQuery && !searchTerms.length && (
            <Grid item xs={12}>
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            </Grid>
          )}
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;

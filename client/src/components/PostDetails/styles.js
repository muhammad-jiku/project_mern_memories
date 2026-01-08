import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: '20px',
    borderRadius: '20px',
    [theme.breakpoints.down('md')]: {
      padding: '16px',
      borderRadius: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '12px',
      borderRadius: '12px',
    },
  },
  recommendedPaper: {
    padding: '20px',
    borderRadius: '20px',
    marginTop: '32px',
    [theme.breakpoints.down('md')]: {
      padding: '16px',
      borderRadius: '16px',
      marginTop: '24px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '12px',
      borderRadius: '12px',
      marginTop: '20px',
    },
  },
  recommendedSection: {
    marginTop: '32px',
    [theme.breakpoints.down('md')]: {
      marginTop: '24px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
    },
  },
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    maxHeight: '600px',
    [theme.breakpoints.down('lg')]: {
      maxHeight: '500px',
    },
    [theme.breakpoints.down('md')]: {
      maxHeight: '450px',
      borderRadius: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      maxHeight: '350px',
      borderRadius: '12px',
    },
  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    [theme.breakpoints.down('md')]: {
      marginTop: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '12px',
    },
  },
  imageSection: {
    width: '100%',
  },
  commentSection: {
    marginTop: '32px',
    marginBottom: '32px',
    padding: '24px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflowX: 'hidden',
    [theme.breakpoints.down('md')]: {
      marginTop: '24px',
      marginBottom: '24px',
      padding: '16px',
      borderRadius: '16px',
      maxWidth: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
      marginBottom: '16px',
      padding: '10px',
      borderRadius: '12px',
      maxWidth: '100%',
    },
  },
  creatorText: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 600,
    display: 'inline',
  },
  titleText: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 700,
    marginTop: '16px',
    marginBottom: '16px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '12px',
      marginBottom: '12px',
    },
  },
  descriptionText: {
    color: '#555',
    lineHeight: 1.8,
    fontSize: '1.1rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9375rem',
      lineHeight: 1.6,
    },
  },
  timeText: {
    color: '#888',
    fontStyle: 'italic',
    marginBottom: '8px',
  },
  recommendedPosts: {
    marginTop: '20px',
    [theme.breakpoints.down('md')]: {
      marginTop: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '12px',
    },
  },
  recommendedCard: {
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '16px',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
    },
    [theme.breakpoints.down('sm')]: {
      borderRadius: '12px',
      '&:hover': {
        transform: 'translateY(-4px)',
      },
    },
  },
  recommendedImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    [theme.breakpoints.down('md')]: {
      height: '180px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '160px',
    },
  },
  recommendedContent: {
    padding: '16px',
    [theme.breakpoints.down('sm')]: {
      padding: '12px',
    },
  },
  recommendedTitle: {
    fontWeight: 600,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  recommendedMessage: {
    marginTop: '8px',
    marginBottom: '8px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  },
  recommendedLikes: {
    fontWeight: 500,
    marginTop: '8px',
  },
  sectionTitle: {
    fontWeight: 600,
    marginBottom: '16px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem',
      marginBottom: '12px',
    },
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '12px',
    marginBottom: '16px',
    [theme.breakpoints.down('sm')]: {
      gap: '6px',
      marginTop: '10px',
      marginBottom: '12px',
    },
  },
  tag: {
    padding: '6px 14px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff !important',
    fontSize: '0.875rem',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    display: 'inline-block',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '5px 12px',
      fontSize: '0.8rem',
      borderRadius: '14px',
    },
  },
  separator: {
    margin: '40px 0 !important',
    height: '2px !important',
    backgroundColor: 'rgba(0, 0, 0, 0.1) !important',
    [theme.breakpoints.down('md')]: {
      margin: '32px 0 !important',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '24px 0 !important',
    },
  },
  recommendedSection: {
    marginTop: '20px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '16px',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
    [theme.breakpoints.down('md')]: {
      padding: '15px',
      height: '35vh',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '12px',
      height: '32vh',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '10px',
      height: '30vh',
    },
  },
  commentsOuterContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    [theme.breakpoints.down('md')]: {
      gap: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      gap: '16px',
    },
  },
  commentInputSection: {
    width: '100%',
  },
  commentsInnerContainer: {
    width: '100%',
    marginTop: '20px',
    [theme.breakpoints.down('md')]: {
      marginTop: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '12px',
    },
  },
  commentHeading: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 600,
    marginBottom: '12px',
  },
  commentText: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: '#555',
    '& strong': {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontWeight: 600,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
    },
  },
}));

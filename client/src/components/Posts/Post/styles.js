import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageWrapper: {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%',
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    '& img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease-in-out',
    },
  },
  imageButton: {
    display: 'block',
    textAlign: 'initial',
    width: '100%',
    position: 'relative',
  },
  editButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      top: '15px',
      right: '15px',
    },
    [theme.breakpoints.down('sm')]: {
      top: '12px',
      right: '12px',
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '20px',
    height: '100%',
    width: '100%',
    maxWidth: '100%',
    position: 'relative',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    overflow: 'hidden',
    background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
      '& $imageWrapper img': {
        transform: 'scale(1.08)',
      },
    },
    [theme.breakpoints.down('md')]: {
      borderRadius: '16px',
      '&:hover': {
        transform: 'translateY(-6px)',
      },
    },
    [theme.breakpoints.down('sm')]: {
      borderRadius: '12px',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  // Section 2: Profile styles
  profileSection: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 20px',
    gap: '12px',
    [theme.breakpoints.down('md')]: {
      padding: '14px 16px',
      gap: '10px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '12px 14px',
      gap: '8px',
    },
  },
  avatar: {
    width: '48px',
    height: '48px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    fontSize: '1.2rem',
    fontWeight: 600,
    [theme.breakpoints.down('md')]: {
      width: '44px',
      height: '44px',
      fontSize: '1.1rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '40px',
      height: '40px',
      fontSize: '1rem',
    },
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  authorName: {
    fontWeight: 600,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontSize: '1rem',
    lineHeight: 1.2,
    [theme.breakpoints.down('md')]: {
      fontSize: '0.95rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
  timeAgo: {
    color: '#666',
    fontSize: '0.85rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
    },
  },
  // Section 3: Description styles
  descriptionSection: {
    padding: '0 20px 16px !important',
    [theme.breakpoints.down('md')]: {
      padding: '0 16px 14px !important',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 14px 12px !important',
    },
  },
  title: {
    fontWeight: 700,
    lineHeight: 1.3,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '8px !important',
    fontSize: '1.15rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.05rem',
    },
  },
  description: {
    lineHeight: 1.6,
    color: '#555',
    fontSize: '0.875rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.85rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      lineHeight: 1.5,
    },
  },
  // Section 4: Tags styles
  tagsSection: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '0 20px 16px',
    [theme.breakpoints.down('md')]: {
      padding: '0 16px 14px',
      gap: '6px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 14px 12px',
      gap: '5px',
    },
  },
  tag: {
    display: 'inline-block',
    padding: '6px 14px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: 500,
    letterSpacing: '0.3px',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
    },
    [theme.breakpoints.down('md')]: {
      padding: '5px 12px',
      fontSize: '0.75rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '4px 10px',
      fontSize: '0.7rem',
    },
  },
  // Section 5: Card actions
  cardActions: {
    padding: '12px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
    background: 'rgba(248, 249, 250, 0.5)',
    marginTop: 'auto',
    [theme.breakpoints.down('md')]: {
      padding: '10px 16px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '8px 14px',
    },
  },
}));

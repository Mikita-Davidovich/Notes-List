import React from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from '../styled';

const NoteContent = ({ text: { title, description, date } }) => {
  const classes = useStyles();
  return (
    <Box className={classes.noteText}>
      <p className={classes.title}>{title}</p>
      <p>{description}</p>
      <p className={classes.date}>{date}</p>
    </Box>
  );
};

NoteContent.propTypes = {
  text: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};
NoteContent.defaultProps = {
  text: 'Hello',
};
export default NoteContent;

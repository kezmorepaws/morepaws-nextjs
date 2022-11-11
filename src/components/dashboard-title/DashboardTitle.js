import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const DashboardTitle = ({ title }) => (
  <Typography variant="h3" component="h1" paragraph>
    {title}
  </Typography>
);

DashboardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DashboardTitle;

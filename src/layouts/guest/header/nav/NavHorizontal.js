import PropTypes from 'prop-types';
import { memo } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Toolbar } from '@mui/material';
// config
import { HEADER } from '../../../../config';
// utils
import { bgBlur } from '../../../../utils/cssStyles';
// components
import { NavSectionHorizontal } from '../../../../components/nav-section';
//
import navConfig from './config';

// ----------------------------------------------------------------------

function NavHorizontal() {
  const theme = useTheme();

  return <NavSectionHorizontal data={navConfig()} />;
}

export default memo(NavHorizontal);

// ----------------------------------------------------------------------

Shadow.propTypes = {
  sx: PropTypes.object,
};

function Shadow({ sx, ...other }) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        width: 1,
        m: 'auto',
        borderRadius: '50%',
        position: 'absolute',
        boxShadow: (theme) => theme.customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}

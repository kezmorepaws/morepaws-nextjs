import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link, Typography } from '@mui/material';
import Subheader from '../subheader/Subheader';
import Image from 'next/image';
import MPLogo from '../../assets/logo/MorePaws-logo-2.png';
import { LogoImageWrapper } from './Logo.styles';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx }, ref) => {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR using local (public folder)
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 'max-content',
        padding: 2,
        borderRadius: 1.2,
        backgroundColor: theme.palette.common.lightBrown,
      }}
    >
      <LogoImageWrapper>
        <Image src={MPLogo} alt={'logo'} />
      </LogoImageWrapper>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return (
    <NextLink href="/" passHref>
      <Link sx={{ display: 'contents' }}>{logo}</Link>
    </NextLink>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool,
};

export default Logo;

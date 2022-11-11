import PropTypes from 'prop-types';
// @mui
import { Typography, Stack } from '@mui/material';
// components
import Logo from '../../components/logo';
import Image from '../../components/image';
import Header from './header';
//
import { StyledRoot, StyledSectionBg, StyledSection, StyledContent } from './styles';

// ----------------------------------------------------------------------

GuestLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  illustration: PropTypes.string,
};

export default function GuestLayout({ children, illustration, title }) {
  return (
    <StyledRoot>
      <Header />
      {children}
    </StyledRoot>
  );
}

import { ThemeContext } from '@emotion/react';
import { Box, styled } from '@mui/material';

export const LandingContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.lightBrown,
  padding: `${theme.spacing(8)}  ${theme.spacing(6)}`,
  //   margin: theme.spacing(4),
  minHeight: '100vh',
  borderRadius: 10,
}));

export const HeroLogoContainer = styled(Box)(({ theme }) => ({
  width: '800px',
  [theme.breakpoints.down('md')]: {
    width: '90vw',
  },
}));

export const HeroImageContainer = styled(Box)(({ theme }) => ({
  width: '1200px',
  [theme.breakpoints.down('md')]: {
    width: '100vw',
  },
}));

export const LandingSignUpFormContainer = styled(Box)(({ theme }) => ({
  boxShadow: theme.shadows[23],
  background: theme.palette.primary.main,
  padding: `${theme.spacing(4)}  ${theme.spacing(6)}`,
  borderRadius: 6,
  minWidth: '600px',
  [theme.breakpoints.down('md')]: {
    minWidth: 'unset',
    width: '100%',
  },
}));

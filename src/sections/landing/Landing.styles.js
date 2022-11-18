import { ThemeContext } from '@emotion/react';
import { alpha, Box, styled } from '@mui/material';

export const LandingContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: `${theme.spacing(8)}  ${theme.spacing(6)}`,
  //   margin: theme.spacing(4),
  minHeight: '100vh',
  borderRadius: 10,
  [theme.breakpoints.down('md')]: {
    padding: `${theme.spacing(3)}  ${theme.spacing(3)}`,
  },
}));

export const HeroLogoContainer = styled(Box)(({ theme }) => ({
  width: '800px',
  [theme.breakpoints.down('md')]: {
    width: '80vw',
  },
}));

export const ComingSoonBox = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(2)}  ${theme.spacing(3)}`,
  borderRadius: 50,
  backgroundColor: alpha(theme.palette.warning.main, 0.175),
  width: 'max-content',
  margin: 'auto',
}));

export const HeroImageContainer = styled(Box)(({ theme }) => ({
  width: '95vw',
  [theme.breakpoints.down('md')]: {
    width: '140vw',
  },
}));

export const LandingSignUpFormIconAndMessageContainer = styled(Box)(({ theme, showSuccess }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: showSuccess ? 'center' : '',
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    alignItems: 'flex-start',
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
    padding: `${theme.spacing(3)}  ${theme.spacing(3)}`,
  },
}));

import { alpha, Box, styled } from '@mui/material';

export const LandingContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,

  //   margin: theme.spacing(4),
  minHeight: '100vh',
  borderRadius: 10,
  [theme.breakpoints.down('md')]: {
    // padding: `${theme.spacing(3)}  ${theme.spacing(3)}`,
  },
}));

export const LogoWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down(1300)]: {
    marginBottom: theme.spacing(10),
  },
}));

export const MainContentWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  width: 'max-content',
  borderRadius: 12,
  padding: `${theme.spacing(6)}  ${theme.spacing(30)}`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  marginTop: -350,
  marginBottom: 50,
  [theme.breakpoints.down(1200)]: {
    padding: `0`,
    marginTop: -200,
  },
  [theme.breakpoints.down('md')]: {
    padding: `${theme.spacing(2)}  ${theme.spacing(6)}`,
    width: '85vw',
    marginTop: -25,
  },
}));

export const MainContentBackground = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  width: '100vw',
  position: 'relative',
}));

export const HeroLogoContainer = styled(Box)(({ theme }) => ({
  width: '800px',
  [theme.breakpoints.down('md')]: {
    width: '80vw',
  },
}));

export const ComingSoonBox = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(2)}  ${theme.spacing(3)}`,
  borderRadius: 8,
  backgroundColor: theme.palette.primary.light,
  // border: `2px solid ${theme.palette.secondary.main}`,
  width: 'max-content',
  margin: 'auto',
}));

export const HeroImageContainer = styled(Box)(({ theme }) => ({
  height: 'max-content',
  display: 'flex',
  flexDirection: 'column',
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
  background: theme.palette.primary.light,
  padding: `${theme.spacing(4)}  ${theme.spacing(6)}`,
  borderRadius: 6,
  minWidth: '600px',
  [theme.breakpoints.down('md')]: {
    minWidth: 'unset',
    width: '100%',
    padding: `${theme.spacing(3)}  ${theme.spacing(3)}`,
  },
}));

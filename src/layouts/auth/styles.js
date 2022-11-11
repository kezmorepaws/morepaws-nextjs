// @mui
import { styled, alpha } from '@mui/material/styles';
// utils

// ----------------------------------------------------------------------

export const StyledRoot = styled('main')(() => ({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
}));

export const StyledContent = styled('div')(({ theme }) => ({
  width: 650,
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(15, 2),
  [theme.breakpoints.up('md')]: {
    flexShrink: 0,
    padding: theme.spacing(20, 8, 0, 8),
  },
}));

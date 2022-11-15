import { Box, styled } from '@mui/material';

export const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.common.lightBrown,
}));

export const LogoImageWrapper = styled(Box)(({ theme }) => ({
  width: '200px',
}));

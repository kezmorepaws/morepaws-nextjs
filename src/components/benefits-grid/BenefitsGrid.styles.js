import { Box, styled } from '@mui/material';

export const StyledBenefitsGridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr',
    padding: theme.spacing(1),
  },
}));

export const StyledBenefitsItemContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: 10,
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

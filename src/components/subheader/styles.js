import styled from '@emotion/styled';
import { ListSubheader } from '@mui/material';

export const StyledSubheader = styled(ListSubheader)(({ theme, sx }) => ({
  ...theme.typography.overline,
  fontSize: 11,
  color: theme.palette.text.secondary,
  ...sx,
}));

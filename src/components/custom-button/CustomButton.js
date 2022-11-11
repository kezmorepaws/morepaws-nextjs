import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Button, Typography } from '@mui/material';

const CustomButton = ({ href, color, size, variant, startIcon, buttonSx, typographySx, text, onClick }) => {
  if (href)
    return (
      <NextLink href={href}>
        <Button
          color={color}
          size={size}
          variant={variant}
          startIcon={startIcon}
          sx={{
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            '&:hover': {
              bgcolor: 'text.primary',
            },
            ...buttonSx,
          }}
        >
          <Typography sx={{ marginBottom: -0.25, ...typographySx }}>{text}</Typography>
        </Button>
      </NextLink>
    );
  else if (onClick)
    return (
      <Button
        onClick={onClick}
        color={color}
        size={size}
        variant={variant}
        startIcon={startIcon}
        sx={{
          bgcolor: 'text.primary',
          color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
          '&:hover': {
            bgcolor: 'text.primary',
          },
          ...buttonSx,
        }}
      >
        <Typography sx={{ marginBottom: -0.25, ...typographySx }}>{text}</Typography>
      </Button>
    );
};

CustomButton.propTypes = {};

export default CustomButton;

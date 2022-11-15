import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField } from '@mui/material';

// ----------------------------------------------------------------------

RHFTextField.propTypes = {
  name: PropTypes.string,
};

export default function RHFTextField({ name, variant, onDarkBg, addOutline, classes, ...other }) {
  const { control } = useFormContext();

  const sx = onDarkBg
    ? {
        '& label': {
          color: 'white',
        },
        '& label.Mui-focused': {
          color: 'warning',
        },
        '& .MuiFilledInput-root': {
          color: 'white',
          ...(addOutline && { border: '0.2px solid white' }),
        },
        '& .MuiFilledInput-input': {
          '&::placeholder': {
            color: 'white',
          },
        },
      }
    : {};

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          variant={variant || 'standard'}
          color="warning"
          {...field}
          sx={sx}
          fullWidth
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}

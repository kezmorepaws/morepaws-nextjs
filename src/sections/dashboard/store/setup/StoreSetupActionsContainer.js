import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const StoreSetupActionsContainer = ({ steps, activeStep, handleBack, handleNext, formSubmitLoading }) => (
  <Box sx={{ display: 'flex' }}>
    <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
      Back
    </Button>
    <Box sx={{ flexGrow: 1 }} />

    <LoadingButton loading={formSubmitLoading} type="submit" color={'grey_palette'} variant="contained">
      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
    </LoadingButton>
  </Box>
);

StoreSetupActionsContainer.propTypes = {};

export default StoreSetupActionsContainer;

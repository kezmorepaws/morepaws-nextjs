import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LandingSignUpFormContainer } from './Landing.styles';
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import * as Yup from 'yup';
import FormProvider, { RHFTextField } from '../../components/hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { mixpanelTrack, MIXPANEL_EVENTS } from '../../mixpanel/mixpanel';

const LandingSignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    full_name: Yup.string().required('Your name is required'),
  });
  const defaultValues = {
    email: '',
    full_name: '',
  };

  const methods = useForm({
    resolver: yupResolver(SignUpSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      mixpanelTrack(MIXPANEL_EVENTS.landing_signup_success, {
        email: data.email,
      });
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 1500);
    } catch (error) {
      console.error(error);

      reset();

      setError('afterSubmit', {
        ...error,
        message: error.message,
      });
    }
  };
  return (
    <LandingSignUpFormContainer>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Box mb={3}>
          <Typography color={'white'} variant="body">
            <StarBorderIcon sx={{ marginBottom: -0.8 }} color="warning" /> Sign up below for your chance to{' '}
            <strong>win £100 worth of dog treats!</strong>
          </Typography>
        </Box>
        <Stack mb={4} gap={2}>
          <RHFTextField
            disabled={isLoading}
            onDarkBg={true}
            variant={'filled'}
            name="full_name"
            label="Your full name"
          />
          <RHFTextField disabled={isLoading} onDarkBg={true} variant={'filled'} name="email" label="Email address" />
        </Stack>
        <Box display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
          {isLoading && <CircularProgress sx={{ marginRight: 2 }} size={16} color="warning" />}
          <Button disabled={isLoading} sx={{ fontWeight: 500 }} type="submit" color="_white" variant="outlined">
            {!isLoading ? 'Enter the draw' : 'Sending...'}
          </Button>
        </Box>
      </FormProvider>
    </LandingSignUpFormContainer>
  );
};

LandingSignUpForm.propTypes = {};

export default LandingSignUpForm;

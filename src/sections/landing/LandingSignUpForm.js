import React from 'react';
import PropTypes from 'prop-types';
import { LandingSignUpFormContainer } from './Landing.styles';
import { Box, Button, Stack, Typography } from '@mui/material';

import * as Yup from 'yup';
import FormProvider, { RHFTextField } from '../../components/hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { mixpanelTrack, MIXPANEL_EVENTS } from '../../mixpanel/mixpanel';

const LandingSignUpForm = (props) => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    full_name: Yup.string().required('Password is required'),
  });
  const defaultValues = {
    email: '',
    full_name: '',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
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
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <LandingSignUpFormContainer>
        <Box mb={2}>
          <Typography color={'white'} variant="body">
            Sign up below for your chance to win £100 worth of dog treats!
          </Typography>
        </Box>
        <Stack mb={4} gap={2}>
          <RHFTextField onDarkBg={true} variant={'filled'} name="full_name" label="Your full name" />
          <RHFTextField onDarkBg={true} variant={'filled'} name="email" label="Email address" />
        </Stack>
        <Box display={'flex'} justifyContent={'flex-end'}>
          <Button color="_white" variant="outlined">
            Enter the draw
          </Button>
        </Box>
      </LandingSignUpFormContainer>
    </FormProvider>
  );
};

LandingSignUpForm.propTypes = {};

export default LandingSignUpForm;

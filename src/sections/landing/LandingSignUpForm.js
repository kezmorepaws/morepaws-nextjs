import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { LandingSignUpFormContainer, LandingSignUpFormIconAndMessageContainer } from './Landing.styles';
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';

import * as Yup from 'yup';
import FormProvider, { RHFTextField } from '../../components/hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { mixpanelTrack, MIXPANEL_EVENTS } from '../../mixpanel/mixpanel';
import axiosInstance from '../../utils/axios';
import Image from 'next/image';

import DogGif from '../../assets/gifs/dog.webp';

const LandingSignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');

  const results = {
    success: 'success',
    already_exists: 'already_exists',
    error: 'error',
  };

  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    first_name: Yup.string().required('Your name is required'),
  });
  const defaultValues = {
    email: '',
    first_name: '',
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
      const res = await axiosInstance.post('marketing/pre-launch-sign-up', { ...data });
      setResult(results.success);
      setIsLoading(false);
    } catch (error) {
      if (error?.message?.split(' ').includes('already')) {
        setResult(results.already_exists);
      } else setResult(results.error);
      setIsLoading(false);
      reset();
      setError('afterSubmit', {
        ...error,
        message: error.message,
      });
    }
  };

  const showForm = useMemo(() => !result || result === results.error, [result, results.error]);

  const showSuccess = useMemo(() => {
    if ((result && result === results.success) || (result && result === results.already_exists)) {
      return true;
    } else return false;
  }, [result, results.already_exists, results.success]);

  const icon = showSuccess ? (
    <SentimentVerySatisfiedOutlinedIcon fontSize="large" sx={{ marginBottom: -0.8 }} color="warning" />
  ) : (
    <StarBorderIcon fontSize="large" sx={{ marginBottom: -0.8 }} color="warning" />
  );

  const textProps = {
    color: 'white',
    variant: 'subtitle1',
  };

  const text = useCallback(() => {
    if (!result) {
      return (
        <Typography {...textProps}>
          Sign up below for your chance to <strong>win £100 worth of dog treats!</strong>
        </Typography>
      );
    }
    if (result === results.success) {
      return <Typography {...textProps}>Thanks! you've entered the draw! watch out for incoming updates!</Typography>;
    }
    if (result === results.already_exists) {
      return <Typography {...textProps}>Thanks! You've already signed up.</Typography>;
    }
    if (result === results.error) {
      return <Typography {...textProps}>Sorry an unexpected error occured, please try again.</Typography>;
    }
  }, [result, results.success, results.already_exists, results.error]);

  return (
    <LandingSignUpFormContainer>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <LandingSignUpFormIconAndMessageContainer showSuccess={showSuccess}>
          {text()}
        </LandingSignUpFormIconAndMessageContainer>
        {showForm && (
          <>
            <Stack mb={4} gap={2}>
              <RHFTextField
                disabled={isLoading}
                onDarkBg={true}
                variant={'filled'}
                name="first_name"
                label="Your first name"
              />
              <RHFTextField
                disabled={isLoading}
                onDarkBg={true}
                variant={'filled'}
                name="email"
                label="Email address"
              />
            </Stack>
            <Box display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
              {isLoading && <CircularProgress sx={{ marginRight: 2 }} size={16} color="secondary" />}
              <Button disabled={isLoading} sx={{ fontWeight: 400 }} type="submit" color="secondary" variant="contained">
                {!isLoading ? 'Enter the draw' : 'Sending...'}
              </Button>
            </Box>
          </>
        )}
        {showSuccess && (
          <Box
            style={{
              transform: 'scale(0.625)',
              display: 'flex',
              justifyContent: 'center',
              marginTop: -70,
              marginBottom: -70,
            }}
          >
            <Image unoptimized={true} style={{ borderRadius: 8 }} src={DogGif} alt={'dog-gif'} />
          </Box>
        )}
      </FormProvider>
    </LandingSignUpFormContainer>
  );
};

LandingSignUpForm.propTypes = {};

export default LandingSignUpForm;

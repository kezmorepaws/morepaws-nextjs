import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, AlertTitle, Container, Link, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import DashboardTitle from '../../components/dashboard-title/DashboardTitle';

import axios from '../../utils/axios';
import { getAuthTokenHeader } from '../../auth/utils';

const ConfirmUserEmail = ({ email, name }) => {
  const [resendLoading, setResendLoading] = useState(false);
  const [resendButtonText, setResendButtonText] = useState('Resend');

  const resendConfirmationEmail = useCallback(async () => {
    setResendLoading(true);
    try {
      const response = await axios.post(
        '/auth/resend-confirm-email',
        {},
        {
          headers: getAuthTokenHeader(),
        }
      );
      setResendButtonText('Sent... send again?');
    } catch (error) {
      console.log(error);
    }
    setResendLoading(false);
  }, []);

  return (
    <Container maxWidth={'xl'}>
      <DashboardTitle title={'Confirm your Email Address'} />
      <Stack mb={3} gap={2}>
        <Typography variant="">
          Hello <strong>{name}</strong>, before you can start selling on the My Local Deli platform, we must confirm you
          are who you say you are!
        </Typography>
        <Typography variant="">
          Please verify your email address using the confirmation link sent to <strong>{email}</strong>
        </Typography>
        <Typography>If you can't find the email in your inbox, be sure to check your spam just incase!</Typography>
      </Stack>
      <Alert severity="info">
        <AlertTitle>Still can't find your confirm email?</AlertTitle>
        Click to resend a confirmation email to <strong>{email}</strong>
        <Link color={'info'} typography={'body2'}>
          <LoadingButton
            color="info"
            onClick={resendConfirmationEmail}
            type="submit"
            variant="contained"
            loading={resendLoading}
            sx={{
              marginLeft: 2,
            }}
          >
            {resendButtonText}
          </LoadingButton>
        </Link>
      </Alert>
    </Container>
  );
};

ConfirmUserEmail.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default React.memo(ConfirmUserEmail);

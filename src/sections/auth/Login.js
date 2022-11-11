// next
import { useRouter } from 'next/router';
// @mui
import { Alert, Tooltip, Stack, Typography, Link, Box } from '@mui/material';
// hooks
import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import LoginLayout from '../../layouts/auth';
//
import AuthLoginForm from './AuthLoginForm';
import AuthWithSocial from './AuthWithSocial';
import { useTheme } from '@mui/material/styles';
import { PATH_GUEST } from '../../routes/paths';

// ----------------------------------------------------------------------

export default function Login() {
  const { method } = useAuthContext();
  const theme = useTheme();
  const router = useRouter();

  return (
    <LoginLayout>
      <Stack spacing={2} sx={{ mb: 4, position: 'relative' }}>
        <Typography variant="h3">Sign in to your Vendor Dashboard</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body1">New user?</Typography>

          <Link onClick={() => router.push(PATH_GUEST.register)} variant="subtitle1">
            Create an account
          </Link>
        </Stack>

        {/* <Tooltip title={method} placement="left">
          <Box
            component="img"
            alt={method}
            src={`/assets/icons/auth/ic_${method}.png`}
            sx={{ width: 32, height: 32, position: 'absolute', right: 0 }}
          />
        </Tooltip> */}

        <Alert severity="info" sx={{ mb: 3 }}>
          Not a vendor?{' '}
          <Link color={theme.palette.info.dark} sx={{ color: 'info' }} href="www.mylocaldeli.com">
            <strong>Go to our customer website</strong>
          </Link>
        </Alert>
      </Stack>

      <AuthLoginForm />

      {/* <AuthWithSocial /> */}
    </LoginLayout>
  );
}

// next
import { useRouter } from 'next/router';
// @mui
import { Alert, Stack, Typography, Link } from '@mui/material';
// hooks
import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import LoginLayout from '../../layouts/auth';
//
import AuthRegisterForm from './AuthRegisterForm';
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
        <Typography variant="h3">Sign up and start selling!</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body1">Already have an account?</Typography>

          <Link onClick={() => router.push(PATH_GUEST.login)} variant="subtitle1">
            Login
          </Link>
        </Stack>

        <Alert severity="info" sx={{ mb: 3 }}>
          Not a vendor?{' '}
          <Link color={theme.palette.info.dark} sx={{ color: 'info' }} href="www.mylocaldeli.com">
            <strong>Go to our customer website</strong>
          </Link>
        </Alert>
      </Stack>

      <AuthRegisterForm />

      {/* <AuthWithSocial /> */}
    </LoginLayout>
  );
}

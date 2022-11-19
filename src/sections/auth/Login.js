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
      <Stack
        sx={{
          backgroundColor: theme.palette.primary.main,
          padding: theme.spacing(6, 4),
          borderRadius: theme.shape.borderRadius / 2,
        }}
      >
        <Stack spacing={2} sx={{ mb: 4, position: 'relative', textAlign: 'center' }}>
          <Typography variant="h3" sx={{ color: theme.palette.primary.contrastText }}>
            Log in
          </Typography>

          {/* <Stack direction="row" spacing={0.5}>
          <Typography variant="body1">New user?</Typography>

          <Link onClick={() => router.push(PATH_GUEST.register)} variant="subtitle1">
            Create an account
          </Link>
        </Stack> */}
        </Stack>

        <AuthLoginForm />

        {/* <AuthWithSocial /> */}
      </Stack>
    </LoginLayout>
  );
}

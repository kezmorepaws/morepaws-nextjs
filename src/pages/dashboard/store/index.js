// next
import Head from 'next/head';
import { Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
// layouts
import DashboardLayout from '../../../layouts/dashboard';
// components
import { useSettingsContext } from '../../../components/settings';
import DashboardTitle from '../../../components/dashboard-title/DashboardTitle';
import { useDispatch, useSelector } from '../../../redux/store';
import { useEffect } from 'react';
import { STORE_STATUS } from '../../../../constants/store';
import { PATH_DASHBOARD } from '../../../routes/paths';
import { useAuthContext } from '../../../auth/useAuthContext';

// ----------------------------------------------------------------------

PageOne.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function PageOne() {
  const { themeStretch } = useSettingsContext();
  const router = useRouter();
  const dispatch = useDispatch();
  const { store_status, store, isLoading } = useSelector((state) => state.store);

  const { isAuthenticated, isInitialized, emailConfirmed, refetchUser } = useAuthContext();

  useEffect(() => {
    if (store_status === STORE_STATUS.PENDING_APPLICATION || store_status === STORE_STATUS.NONE) {
      router.push(PATH_DASHBOARD.store.setup);
    }
  }, [store_status]);

  return (
    <>
      <Head>
        <title> Store | Vendor Dashboard</title>
      </Head>

      <Container maxWidth={'xl'}>
        <DashboardTitle title="Store" />

        <Typography gutterBottom>
          Curabitur turpis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod
          ligula urna in dolor. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Phasellus blandit leo
          ut odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id
          purus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. In consectetuer turpis ut velit.
          Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
          Vestibulum suscipit nulla quis orci. Nam commodo suscipit quam. Sed a libero.
        </Typography>

        <Typography>
          Praesent ac sem eget est egestas volutpat. Phasellus viverra nulla ut metus varius laoreet. Curabitur
          ullamcorper ultricies nisi. Ut non enim eleifend felis pretium feugiat. Donec mi odio, faucibus at,
          scelerisque quis, convallis in, nisi. Fusce vel dui. Quisque libero metus, condimentum nec, tempor a, commodo
          mollis, magna. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Cras dapibus.
        </Typography>
      </Container>
    </>
  );
}

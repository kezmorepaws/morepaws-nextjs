// next
import Head from 'next/head';
import { Breadcrumbs, Container, Typography } from '@mui/material';
// layouts
import DashboardLayout from '../../../layouts/dashboard';
// components
import { useSettingsContext } from '../../../components/settings';
import DashboardTitle from '../../../components/dashboard-title/DashboardTitle';
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';
import { PATH_DASHBOARD } from '../../../routes/paths';
import StoreSetupStepper from '../../../sections/dashboard/store/setup/StoreSetupStepper';

// ----------------------------------------------------------------------

PageSix.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function PageSix() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Head>
        <title> Setup Store | My Local Deli</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <CustomBreadcrumbs
          links={[
            {
              name: 'Store',
              href: PATH_DASHBOARD.root,
            },
            { name: 'Setup Store' },
          ]}
          moreLink={['https://mui.com/components/steppers']}
        />
        <DashboardTitle title="Setup your store" />

        <StoreSetupStepper />
        {/* <Typography gutterBottom>Your</Typography> */}
      </Container>
    </>
  );
}

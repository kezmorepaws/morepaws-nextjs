import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// @mui
import { Box } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// auth
import AuthGuard from '../../auth/AuthGuard';
// components
import { useSettingsContext } from '../../components/settings';
//
import Main from './Main';
import Header from './header';

import NavVertical from './nav/NavVertical';
import { useSelector, useDispatch } from '../../redux/store';
import { getStore } from '../../redux/slices/store';
import LoadingScreen from '../../components/loading-screen';
import { useAuthContext } from '../../auth/useAuthContext';
import ConfirmUserEmail from './ConfirmUserEmail';
import { use } from 'i18next';

// ----------------------------------------------------------------------

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default function DashboardLayout({ children }) {
  const { themeLayout } = useSettingsContext();

  const isDesktop = useResponsive('up', 'lg');

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.store);

  const { emailConfirmed, user } = useAuthContext();

  useEffect(() => {
    dispatch(getStore());
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderNavVertical = <NavVertical openNav={open} onCloseNav={handleClose} />;

  const renderContent = () => (
    <>
      <Header onOpenNav={handleOpen} />

      <Box
        sx={{
          display: { lg: 'flex' },
          minHeight: { lg: 1 },
        }}
      >
        {renderNavVertical}

        {
          <Main>
            {emailConfirmed ? (
              isLoading ? (
                <LoadingScreen />
              ) : (
                children
              )
            ) : (
              <ConfirmUserEmail name={user?.display_name} email={user?.email} />
            )}
          </Main>
        }
      </Box>
    </>
  );

  return <AuthGuard> {renderContent()} </AuthGuard>;
}

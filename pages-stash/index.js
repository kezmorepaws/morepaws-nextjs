import { useEffect } from 'react';

import GuestGuard from './../auth/GuestGuard';
import GuestLayout from '../layouts/guest';

// utils

import { mixpanelTrack, MIXPANEL_EVENTS } from '../mixpanel/mixpanel';
import HeroSection from '../sections/index/HeroSection';

// ----------------------------------------------------------------------

export default function Index() {
  useEffect(() => {
    mixpanelTrack(MIXPANEL_EVENTS.home_guest_page_rendered);
  }, []);

  return (
    <GuestGuard>
      <GuestLayout>
        <HeroSection />
      </GuestLayout>
    </GuestGuard>
  );
}

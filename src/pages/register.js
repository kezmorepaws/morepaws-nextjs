// next
import Head from 'next/head';
// auth
import GuestGuard from '../auth/GuestGuard';
// sections
import Register from '../sections/auth/Register';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Head>
        <title> Login | My Local Deli - Vendor Dashboard</title>
      </Head>

      <GuestGuard>
        <Register />
      </GuestGuard>
    </>
  );
}

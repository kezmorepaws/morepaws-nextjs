import { m } from 'framer-motion';
// next
import Head from 'next/head';
import NextLink from 'next/link';
// @mui
import { Button, Typography } from '@mui/material';
// layouts
import CompactLayout from '../layouts/compact';
// components
import { MotionContainer, varBounce } from '../components/animate';
// assets
import { PageNotFoundIllustration } from '../assets/illustrations';

import HelpOutlineTwoToneIcon from '@mui/icons-material/HelpOutlineTwoTone';
import CustomButton from '../components/custom-button/CustomButton';
// ----------------------------------------------------------------------

Page404.getLayout = (page) => <CompactLayout>{page}</CompactLayout>;

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <>
      <Head>
        <title> 404 Page Not Found | My Local Deli</title>
      </Head>

      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h2" color={'primary'} paragraph>
            Sorry, page not found!
          </Typography>
        </m.div>

        <m.div style={{ marginBottom: 24 }} variants={varBounce().in}>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
            spelling.
          </Typography>
        </m.div>

        {/* <m.div variants={varBounce().in}>
          <PageNotFoundIllustration
            sx={{
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          />
        </m.div> */}

        <m.div
          style={{ marginBottom: 24, display: 'flex', justifyContent: 'center', gap: 16 }}
          variants={varBounce().in}
        >
          <NextLink href={'/'} passHref>
            <Button
              color="inherit"
              size="large"
              variant="contained"
              startIcon={<HelpOutlineTwoToneIcon width={24} />}
              sx={{
                bgcolor: 'text.primary',
                color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                '&:hover': {
                  bgcolor: 'text.primary',
                },
              }}
            >
              <Typography sx={{ marginBottom: -0.25 }}>Need help? </Typography>
            </Button>
          </NextLink>

          <NextLink href="/" passHref>
            <Button color="info" size="large" variant="outlined">
              <Typography sx={{ marginBottom: -0.25 }}>Go home </Typography>
            </Button>
          </NextLink>
        </m.div>
      </MotionContainer>
    </>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { PATH_DASHBOARD, PATH_GUEST } from '../../routes/paths';

import { alpha, Button, Card, Link, Stack, Typography } from '@mui/material';
import { m } from 'framer-motion';
import { MotionViewport, varFade } from '../../components/animate';
// utils
import { textGradient } from '../../utils/cssStyles';
import NextLink from 'next/link';
import SvgColor from '../../components/svg-color';
import Iconify from '../../components/iconify';

import AppRegistrationTwoToneIcon from '@mui/icons-material/AppRegistrationTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
// import CustomButton from '../../components/custom-button/CustomButton';

const HeroSection = (props) => {
  const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
    boxShadow: (theme) => ({
      md: `-40px 40px 80px ${
        theme.palette.mode === 'light' ? alpha(theme.palette.grey[500], 0.16) : alpha(theme.palette.common.black, 0.4)
      }`,
    }),
    padding: theme.spacing(10, 5),
    flex: 1,
  }));

  const StyledStack = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    gap: theme.spacing(10),
    padding: theme.spacing(5),
    paddingTop: theme.spacing(10),
  }));

  const router = useRouter();
  return (
    <StyledStack>
      <Description />
      {/* <Container component={MotionViewport}>
            <Stack
              spacing={3}
              sx={{
                textAlign: 'center',
                mb: { xs: 5, md: 10 },
              }}
            >
              <m.div variants={varFade().inUp}>
                <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
                  My Local Deli
                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Typography variant="h2">
                  Online marketplace for Artisan Food and Drink Vendors
                  <br /> helps you?
                </Typography>
              </m.div>
            </Stack>

            <Box
              gap={{ xs: 3, lg: 10 }}
              display="grid"
              alignItems="center"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)',
              }}
            ></Box>
          </Container> */}
      <StyledCard>
        <p>hello</p>
        <button onClick={() => router.push('/dashboard')}>click</button>
      </StyledCard>
    </StyledStack>
  );
};

HeroSection.propTypes = {};

export default HeroSection;

const StyledDescription = styled('div')(({ theme }) => ({
  // maxWidth: 800,
  flex: 0.6,
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(10, 0),
  height: '100%',
}));

const StyledGradientText = styled(m.h1)(({ theme }) => ({
  ...textGradient(
    `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.dark} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.dark} 75%, ${theme.palette.primary.main} 100%`
  ),
  backgroundSize: '400%',
  letterSpacing: -1,
  fontSize: `${64 / 16}rem`,
  textAlign: 'center',
  lineHeight: 1.05,
  padding: 0,
  marginTop: 16,
  marginBottom: 24,
  [theme.breakpoints.up('md')]: {
    fontSize: `${80 / 16}rem`,
  },
}));

function Description() {
  return (
    <StyledDescription>
      <m.div variants={varFade().in}>
        <Typography color={'grey'} variant="h2" sx={{ textAlign: 'center', marginBottom: 2 }}>
          Artisan Food and Drink
        </Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <StyledGradientText
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            repeatType: 'reverse',
            ease: 'linear',
            duration: 8,
            repeat: Infinity,
          }}
        >
          Online Marketplace
        </StyledGradientText>
      </m.div>

      <m.div variants={varFade().in}>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          Connecting foodies with high quality, local, artisan and ethnic food sellers.
        </Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <Stack spacing={1.5} direction={{ xs: 'column-reverse', sm: 'row' }} sx={{ my: 5 }}>
          <Stack alignItems="center" spacing={2}>
            {/* <CustomButton /> */}
            <NextLink href={PATH_GUEST.register} passHref>
              <Button
                color="inherit"
                size="large"
                variant="contained"
                startIcon={<AppRegistrationTwoToneIcon width={24} />}
                sx={{
                  bgcolor: 'text.primary',
                  color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                  '&:hover': {
                    bgcolor: 'text.primary',
                  },
                }}
              >
                <Typography sx={{ marginBottom: -0.25 }}>Register</Typography>
              </Button>
            </NextLink>

            <Link
              color="inherit"
              variant="caption"
              target="_blank"
              rel="noopener"
              href={PATH_GUEST.home}
              sx={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <Iconify icon="ant-design:user-outlined" width={16} sx={{ mr: 0.5 }} />

              <Typography variant="body2" sx={{ marginBottom: -0.25 }}>
                or Login
              </Typography>
            </Link>
          </Stack>

          <Button
            color="inherit"
            size="large"
            variant="outlined"
            startIcon={<Iconify icon="eva:external-link-fill" width={24} />}
            target="_blank"
            rel="noopener"
            href={PATH_GUEST.about_us}
            sx={{ borderColor: 'text.primary' }}
          >
            <Typography sx={{ marginBottom: -0.25 }}>Customer Website</Typography>
          </Button>
        </Stack>
      </m.div>

      <Stack spacing={3} sx={{ textAlign: 'center', opacity: 0.4 }}>
        <m.div variants={varFade().in}>
          <Typography variant="overline">Partnered with</Typography>
        </m.div>

        <Stack spacing={2} direction="row" justifyContent="center">
          {/* {['sketch', 'figma', 'js', 'ts', 'nextjs'].map((platform) => (
            <m.div key={platform} variants={varFade().in}>
              <SvgColor src={`/assets/icons/platforms/ic_${platform}.svg`} />
            </m.div>
          ))} */}
        </Stack>
      </Stack>
    </StyledDescription>
  );
}

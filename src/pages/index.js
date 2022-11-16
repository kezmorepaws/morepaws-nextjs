import React from 'react';
import PropTypes from 'prop-types';
import { Stack } from '@mui/system';

import {
  ComingSoonBox,
  HeroImageContainer,
  HeroLogoContainer,
  LandingContentContainer,
} from '../sections/landing/Landing.styles';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import MPLogo from '../assets/logo/MorePaws-logo-2.png';
import HeroImage from '../assets/images/landing-hero-image.jpeg';
import LandingSignUpForm from '../sections/landing/LandingSignUpForm';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

// --------------- PRELAUNCH LANDING PAGE INDEX

const index = (props) => (
  <Stack>
    <LandingContentContainer>
      <Stack alignItems={'center'} justifyContent={'center'}>
        <HeroLogoContainer>
          <Image src={MPLogo} alt={'logo'} />
        </HeroLogoContainer>
        <Box maxWidth={'500px'} textAlign={'center'} mb={4}>
          <Box mt={2} mb={6}>
            <Typography gutterBottom color={'primary'} variant="h4">
              <EmojiPeopleIcon sx={{ marginBottom: -0.4 }} color="warning" /> Who are we?
            </Typography>
            <Typography color={'primary'} variant="subtitle">
              We are a new platform for dog lovers to find like minded people, like minded pets, explore new areas and
              expand your dogs social circle by creating friendly, local communities.
            </Typography>
            <br />
            <br />
            <ComingSoonBox>
              <Typography color={'primary'} variant="subtitle">
                Website coming soon!
              </Typography>
            </ComingSoonBox>
          </Box>
          <Box mb={2}>
            <Typography gutterBottom color={'primary'} variant="h4">
              <EmojiEventsIcon sx={{ marginBottom: -0.4 }} color="warning" /> Pre-launch competition
            </Typography>
            <Typography color={'primary'} variant="subtitle">
              Grab your <strong>chance to win £100 worth of dog treats,</strong> by signing up to our pre-launch
              newsletter below. The winner will be chosen at random on the day of our launch!
            </Typography>
          </Box>
        </Box>
        <Box mb={8}>
          <LandingSignUpForm />
        </Box>
        <HeroImageContainer>
          <Image src={HeroImage} alt={'logo'} />
        </HeroImageContainer>
      </Stack>
    </LandingContentContainer>
  </Stack>
);

index.propTypes = {};

export default index;

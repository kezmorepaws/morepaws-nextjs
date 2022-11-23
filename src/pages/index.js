import React from 'react';
import PropTypes from 'prop-types';
import { Stack } from '@mui/system';

import {
  ComingSoonBox,
  HeroImageContainer,
  HeroLogoContainer,
  LandingContentContainer,
  MainContentWrapper,
} from '../sections/landing/Landing.styles';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import MPLogo from '../assets/logo/MorePaws-logo-2.png';
import HeroImage from '../assets/images/landing-hero-image.jpg';
import LandingSignUpForm from '../sections/landing/LandingSignUpForm';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

// --------------- PRELAUNCH LANDING PAGE INDEX

const index = (props) => (
  <Stack overflow={'hidden'}>
    <LandingContentContainer>
      <Stack alignItems={'center'} justifyContent={'center'}>
        {/* <HeroLogoContainer>
          <Image src={MPLogo} alt={'logo'} />
        </HeroLogoContainer> */}
        <HeroImageContainer>
          <Image src={HeroImage} alt={'logo'} />
        </HeroImageContainer>
        <MainContentWrapper>
          <Box maxWidth={'500px'} textAlign={'center'} mb={4}>
            <Box mt={2} mb={6}>
              <Box mb={6}>
                <Typography gutterBottom color={'primary'} variant="h4">
                  <EmojiPeopleIcon fontSize="large" sx={{ marginBottom: -0.75 }} color="secondary" /> Who are we?
                </Typography>
                <Typography color={'grey_palette'} variant="subtitle">
                  MorePaws is an online platform dedicated to helping dog lovers find like minded people, with like
                  minded pets, explore new dog-friendly places and expand your dogs social circle by creating friendly,
                  local communities.
                </Typography>
              </Box>
              <ComingSoonBox>
                <Typography color={'white'} variant="h6">
                  Website coming soon!
                </Typography>
              </ComingSoonBox>
            </Box>
            <Box mb={4}>
              <Typography gutterBottom color={'primary'} variant="h4">
                <EmojiEventsIcon fontSize="large" sx={{ marginBottom: -0.75 }} color="secondary" /> Pre-launch
                competition
              </Typography>
              <Typography color={'grey_palette'} variant="subtitle">
                Grab your <strong>chance to win £100 worth of dog treats,</strong> by signing up to our pre-launch
                newsletter below. The winner will be chosen at random on the day of our launch!
              </Typography>
            </Box>
          </Box>
          <Box mb={8}>
            <LandingSignUpForm />
          </Box>
        </MainContentWrapper>
      </Stack>
    </LandingContentContainer>
  </Stack>
);

index.propTypes = {};

export default index;

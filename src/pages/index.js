import React from 'react';
import PropTypes from 'prop-types';
import { Stack } from '@mui/system';

import {
  ComingSoonBox,
  HeroImageContainer,
  HeroLogoContainer,
  LandingContentContainer,
  LogoWrapper,
  MainContentBackground,
  MainContentWrapper,
} from '../sections/landing/Landing.styles';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import GlobeBackground from '../assets/images/Globe-background.svg';
import PhotoGroup from '../assets/images/Photo-group-pins.svg';
import LandingSignUpForm from '../sections/landing/LandingSignUpForm';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MPLogo from '../assets/images/MorePaws-logo.svg';
import useCustomMediaQueries from '../hooks/useCustomMediaQueries';
// --------------- PRELAUNCH LANDING PAGE INDEX

const Index = (props) => {
  const { isMobile, isTablet } = useCustomMediaQueries();

  return (
    <Stack sx={{ overflowX: 'hidden' }}>
      <LandingContentContainer>
        <Stack alignItems={'center'} justifyContent={'center'}>
          {/* <HeroLogoContainer>
          <Image src={MPLogo} alt={'logo'} />
        </HeroLogoContainer> */}
          <HeroImageContainer>
            <LogoWrapper>
              <Image height={isTablet ? 800 : 300} src={MPLogo} alt={'logo'} />
            </LogoWrapper>

            <Box
              sx={{
                width: '100vw',
                position: 'relative',
                left: 0,
                margin: 'auto',
              }}
            >
              <Image
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                src={GlobeBackground}
                alt={'logo'}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '-100px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: isTablet ? '100vw' : '50vw',
                }}
              >
                <Image
                  objectFit="cover"
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              33vw"
                  // height={300}
                  src={PhotoGroup}
                  alt={'logo'}
                />
              </Box>
            </Box>
          </HeroImageContainer>
          <MainContentBackground>
            <MainContentWrapper>
              <Box maxWidth={'500px'} textAlign={'center'} mb={4}>
                <Box mt={2} mb={6}>
                  <Box mb={6}>
                    <Typography gutterBottom color={'secondary'} variant="h4">
                      <EmojiPeopleIcon fontSize="large" sx={{ marginBottom: -0.75 }} color="primary.light" /> Who are
                      we?
                    </Typography>
                    <Typography color={'grey_palette'} variant="subtitle">
                      MorePaws is an online platform dedicated to helping dog lovers find like minded people, with like
                      minded pets, explore new dog-friendly places and expand your dogs social circle by creating
                      friendly, local communities.
                    </Typography>
                  </Box>
                  <ComingSoonBox>
                    <Typography color={'white'} variant="h6">
                      Website coming soon!
                    </Typography>
                  </ComingSoonBox>
                </Box>
                <Box mb={4}>
                  <Typography gutterBottom color={'secondary'} variant="h4">
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
          </MainContentBackground>
        </Stack>
      </LandingContentContainer>
    </Stack>
  );
};

Index.propTypes = {};

export default Index;

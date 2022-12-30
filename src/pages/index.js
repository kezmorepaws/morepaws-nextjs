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
import AccountIcon from '../assets/icons/Account-green.svg';
import GiveawayIcon from '../assets/icons/Giveaway-green.svg';
import useCustomMediaQueries from '../hooks/useCustomMediaQueries';
import BenefitsGrid from '../components/benefits-grid/BenefitsGrid';
// --------------- PRELAUNCH LANDING PAGE INDEX

const Index = (props) => {
  const { isMobile, isTablet } = useCustomMediaQueries();
  const iconStyles = {
    height: 32,
    width: 32,
    marginRight: 8,
  };
  return (
    <Stack sx={{ overflowX: 'hidden' }}>
      <LandingContentContainer>
        <Stack alignItems={'center'} justifyContent={'center'}>
          {/* <HeroLogoContainer>
          <Image src={MPLogo} alt={'logo'} />
        </HeroLogoContainer> */}
          <HeroImageContainer>
            <LogoWrapper>
              <Image height={isTablet ? 850 : 300} src={MPLogo} alt={'logo'} />
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
                  top: isTablet ? '-100px' : '-150px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: isTablet ? '90vw' : '50vw',
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
                <Box
                  sx={{
                    textAlign: 'center',
                    width: isMobile ? 250 : 340,
                    margin: 'auto',
                    marginTop: isMobile ? 1 : -5,
                  }}
                >
                  <Typography sx={{ lineHeight: 1.2 }} color={'white'} variant={isMobile ? 'h4' : 'h3'}>
                    Building a community with more friends, more walks and MorePaws
                  </Typography>
                </Box>
              </Box>
            </Box>
          </HeroImageContainer>
          <MainContentBackground>
            <MainContentWrapper>
              {/* <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                maxWidth={'500px'}
                textAlign={'center'}
                mb={4}
              > */}
              {/* <Box mt={2} mb={6}>
                  <Box mb={6}>
                    <Box mb={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                      <img style={iconStyles} src={AccountIcon.src} alt="Landscape picture" />
                      <Typography sx={{ marginBottom: -1 }} gutterBottom color={'secondary'} variant="h4">
                        Who Are We?
                      </Typography>
                    </Box>

                    <Typography color={'grey_palette'} variant="subtitle">
                      Morepaws is a platform which helps dog owners explore new places and meet new faces! Find other
                      users who can suggest walks anywhere in the UK while expanding your doggy community.
                    </Typography>
                  </Box>

                  <ComingSoonBox>
                    <Typography color={'white'} variant="h6">
                      Website coming soon!
                    </Typography>
                  </ComingSoonBox>
                </Box>
                <Box mb={4}>
                  <Box mb={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <img style={iconStyles} src={GiveawayIcon.src} alt="Landscape picture" />
                    <Typography sx={{ marginBottom: -1 }} gutterBottom color={'secondary'} variant="h4">
                      Christmas Giveaway
                    </Typography>
                  </Box>

                  <Typography color={'grey_palette'} variant="subtitle">
                    Register below for your chance to win <strong>£100 worth of dog treats</strong> and to keep up to
                    date with our exciting launch.
                  </Typography>
                  <br />
                  <br />
                  <Typography color={'grey_palette'} variant="subtitle">
                    Winner announced Christmas Day!
                  </Typography>
                </Box>
              </Box>
              <Box mb={8}>{/* <LandingSignUpForm />  */}
              {/* </Box> */}
              <BenefitsGrid />
            </MainContentWrapper>
          </MainContentBackground>
        </Stack>
      </LandingContentContainer>
    </Stack>
  );
};

Index.propTypes = {};

export default Index;

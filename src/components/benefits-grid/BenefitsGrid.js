import React from 'react';
import { Box } from '@mui/system';
import ChatGreen from '../../assets/icons/Chat_green.svg';
import MapGreen from '../../assets/icons/Map_green.svg';
import PerksGreen from '../../assets/icons/Perks_green.svg';
import FitnessGreen from '../../assets/icons/Fitness_green.svg';
import MentalHealthGreen from '../../assets/icons/Mental_health_green.svg';
import PawsGreen from '../../assets/icons/Account-green.svg';
import { Button, Typography } from '@mui/material';
import { StyledBenefitsGridContainer, StyledBenefitsItemContainer } from './BenefitsGrid.styles';
import useCustomMediaQueries from '../../hooks/useCustomMediaQueries';

const benefits = [
  {
    icon: ChatGreen,
    title: 'Social',
    caption: 'Build friendship groups for you and your dog',
  },
  {
    icon: MapGreen,
    title: 'Explore',
    caption: 'Find new walks, trails, beaches and parks',
  },
  {
    icon: PerksGreen,
    title: 'Perks',
    caption: 'Save money on treats and necessities',
  },
  {
    icon: FitnessGreen,
    title: 'Health & Fitness',
    caption: 'Discover energising new hikes and runs',
  },
  {
    icon: MentalHealthGreen,
    title: 'Mental Wellbeing',
    caption: 'Ease the anxieties of everyday ownership',
  },
  {
    icon: PawsGreen,
    title: 'Community',
    caption: 'Surround yourself with like-minded dog lovers',
  },
];

const iconStyles = {
  height: 64,
  marginBottom: 16,
};

const BenefitsGrid = (props) => {
  const { isTablet } = useCustomMediaQueries();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography
        lineHeight={1.1}
        backgroundColor={'primary.light'}
        textAlign={'center'}
        variant="h3"
        color={'white'}
        marginBottom={3}
      >
        A world of benefits for you and your dog
      </Typography>
      <StyledBenefitsGridContainer>
        {benefits?.map((b) => (
          <StyledBenefitsItemContainer key={b.title}>
            <img src={b.icon.src} style={iconStyles} alt={b.title} />
            <Typography
              minHeight={isTablet ? 45 : ''}
              textAlign={'center'}
              color={'grey_palette.light'}
              variant={isTablet ? 'h4' : 'h5'}
              gutterBottom
            >
              {b.title}
            </Typography>
            <Typography
              textAlign={'center'}
              width={isTablet ? 110 : 200}
              color={'grey_palette.light'}
              variant="subtitle2"
              gutterBottom
            >
              {b.caption}
            </Typography>
          </StyledBenefitsItemContainer>
        ))}
      </StyledBenefitsGridContainer>
      {/* <Button
        sx={{ fontWeight: 400, textTransform: 'unset', margin: 'auto', marginTop: 6 }}
        type="submit"
        color="secondary"
        variant="contained"
      >
        {'Join the community'}
      </Button> */}
    </Box>
  );
};

BenefitsGrid.propTypes = {};

export default React.memo(BenefitsGrid);

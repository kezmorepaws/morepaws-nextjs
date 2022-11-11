// routes
import { PATH_DASHBOARD, PATH_GUEST } from '../../../../routes/paths';
// components
import SvgColor from '../../../../components/svg-color';
import CottageTwoToneIcon from '@mui/icons-material/CottageTwoTone';
import EmojiPeopleTwoToneIcon from '@mui/icons-material/EmojiPeopleTwoTone';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import AppRegistrationTwoToneIcon from '@mui/icons-material/AppRegistrationTwoTone';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  home: <CottageTwoToneIcon />,
  about_us: <EmojiPeopleTwoToneIcon />,
  pricing: <CreditCardTwoToneIcon />,
  register: <AppRegistrationTwoToneIcon />,
  login: icon('ic_user'),
};

const navConfig = () =>
  // GENERAL
  // ----------------------------------------------------------------------
  [
    {
      // subheader: 'Welcome',
      items: [
        {
          title: 'Home',
          path: PATH_GUEST.home,
          icon: ICONS.home,
          // children: [
          //   { title: 'Four', path: PATH_DASHBOARD.store.four },
          //   { title: 'Five', path: PATH_DASHBOARD.store.five },
          //   { title: 'Six', path: PATH_DASHBOARD.store.six },
          // ],
        },
        { title: 'About Us', path: PATH_GUEST.about_us, icon: ICONS.about_us },
        { title: 'Pricing', path: PATH_GUEST.pricing, icon: ICONS.pricing },
        { title: 'Register', path: PATH_GUEST.register, icon: ICONS.register },
        { title: 'Login', path: PATH_GUEST.login, icon: ICONS.login },
      ],
    },
  ];

export default navConfig;

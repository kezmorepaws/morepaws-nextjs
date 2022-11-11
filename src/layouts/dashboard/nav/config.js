// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';
import svgColor from '../../../components/svg-color';
import { STORE_STATUS } from '../../../../constants/store';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  ecommerce: icon('ic_ecommerce'),
  dashboard: icon('ic_dashboard'),
  cart: icon('ic_cart'),
  user: icon('ic_user'),
  settings: <SvgColor src={`/assets/icons/setting/ic_setting.svg`} sx={{ width: 1, height: 1 }} />,
};

const navConfig = (store_status) => {
  if (store_status === STORE_STATUS.LIVE)
    return [
      // GENERAL
      // ----------------------------------------------------------------------
      {
        subheader: 'vendor dashboard',
        items: [
          {
            title: 'Store',
            path: PATH_DASHBOARD.store.root,
            icon: ICONS.dashboard,
            // children: [
            //   { title: 'Four', path: PATH_DASHBOARD.store.four },
            //   { title: 'Five', path: PATH_DASHBOARD.store.five },
            //   { title: 'Six', path: PATH_DASHBOARD.store.six },
            // ],
          },
          { title: 'Products', path: PATH_DASHBOARD.products, icon: ICONS.ecommerce },
          { title: 'Orders', path: PATH_DASHBOARD.orders, icon: ICONS.cart },
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: 'management',
        items: [
          {
            title: 'users',
            path: PATH_DASHBOARD.users.root,
            icon: ICONS.user,
            // children: [
            //   { title: 'Four', path: PATH_DASHBOARD.user.four },
            //   { title: 'Five', path: PATH_DASHBOARD.user.five },
            //   { title: 'Six', path: PATH_DASHBOARD.user.six },
            // ],
          },
          {
            title: 'settings',
            path: PATH_DASHBOARD.settings.root,
            icon: ICONS.settings,
            // children: [
            //   { title: 'Four', path: PATH_DASHBOARD.user.four },
            //   { title: 'Five', path: PATH_DASHBOARD.user.five },
            //   { title: 'Six', path: PATH_DASHBOARD.user.six },
            // ],
          },
        ],
      },
    ];
  else
    return [
      // GENERAL
      // ----------------------------------------------------------------------
      {
        subheader: 'vendor dashboard',
        items: [
          {
            title: 'Store',
            path: PATH_DASHBOARD.store.root,
            icon: ICONS.dashboard,
            // children: [
            //   { title: 'Four', path: PATH_DASHBOARD.store.four },
            //   { title: 'Five', path: PATH_DASHBOARD.store.five },
            //   { title: 'Six', path: PATH_DASHBOARD.store.six },
            // ],
          },
        ],
      },
      {
        subheader: 'management',
        items: [
          {
            title: 'settings',
            path: PATH_DASHBOARD.settings.root,
            icon: ICONS.settings,
            // children: [
            //   { title: 'Four', path: PATH_DASHBOARD.user.four },
            //   { title: 'Five', path: PATH_DASHBOARD.user.five },
            //   { title: 'Six', path: PATH_DASHBOARD.user.six },
            // ],
          },
        ],
      },
    ];
};

export default navConfig;

// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_GUEST = {
  home: '/',
  about_us: '/about-us',
  pricing: '/pricing',
  register: '/register',
  login: '/login',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  store: {
    root: path(ROOTS_DASHBOARD, '/store'),
    setup: path(ROOTS_DASHBOARD, '/store/setup'),
  },
  products: path(ROOTS_DASHBOARD, '/products'),
  orders: path(ROOTS_DASHBOARD, '/orders'),
  users: {
    root: path(ROOTS_DASHBOARD, '/users'),
    // four: path(ROOTS_DASHBOARD, '/user/four'),
    // five: path(ROOTS_DASHBOARD, '/user/five'),
    // six: path(ROOTS_DASHBOARD, '/user/six'),
  },
  settings: {
    root: path(ROOTS_DASHBOARD, '/settings'),
    // four: path(ROOTS_DASHBOARD, '/user/four'),
    // five: path(ROOTS_DASHBOARD, '/user/five'),
    // six: path(ROOTS_DASHBOARD, '/user/six'),
  },
};

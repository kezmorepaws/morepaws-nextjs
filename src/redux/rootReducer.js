import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
// slices

import storeReducer from './slices/store';

// ----------------------------------------------------------------------

// const createNoopStorage = () => ({
//   getItem() {
//     return Promise.resolve(null);
//   },
//   setItem(_key, value) {
//     return Promise.resolve(value);
//   },
//   removeItem() {
//     return Promise.resolve();
//   },
// });

// const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

// const rootPersistConfig = {
//   key: 'root',
//   storage,
//   keyPrefix: 'redux-',
//   whitelist: [],
// };

// const storePersistConfig = {
//   key: 'store',
//   storage,
//   keyPrefix: 'redux-',
//   whitelist: ['sortBy', 'checkout'],
// };

const rootReducer = combineReducers({
  // mail: mailReducer,
  // chat: chatReducer,
  // calendar: calendarReducer,
  store: storeReducer,
  // store: persistReducer(storePersistConfig, storeReducer),
});

// export { rootPersistConfig, rootReducer };
export { rootReducer };

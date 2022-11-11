import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer, useCallback } from 'react';
// utils
import axios from '../utils/axios';
//
import { getAuthTokenHeader, isValidToken, setSession } from './utils';

// ----------------------------------------------------------------------

// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...

// ----------------------------------------------------------------------

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
  emailConfirmed: false,
};

const reducer = (state, action) => {
  if (action.type === 'INITIAL') {
    return {
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
      emailConfirmed: action.payload.user?.email_confirmed,
    };
  }
  if (action.type === 'LOGIN') {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
      emailConfirmed: action.payload.user?.email_confirmed,
    };
  }
  if (action.type === 'REGISTER') {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
      emailConfirmed: action.payload.user?.email_confirmed,
    };
  }
  if (action.type === 'LOGOUT') {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
      emailConfirmed: false,
    };
  }

  return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext(null);

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : '';

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        const response = await axios.get('/auth', {
          headers: getAuthTokenHeader(),
        });

        const { user } = response.data;

        dispatch({
          type: 'INITIAL',
          payload: {
            isAuthenticated: true,
            user,
          },
        });
      } else {
        dispatch({
          type: 'INITIAL',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: 'INITIAL',
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, []);

  const refetchUser = () => {
    initialize();
  };

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = async (email, password) => {
    const response = await axios.post('/auth/login', {
      email,
      password,
    });

    const { accessToken, user } = response.data;

    setSession(accessToken);

    dispatch({
      type: 'LOGIN',
      payload: {
        user,
      },
    });
  };

  // REGISTER
  const register = async (email, password, first_name, last_name) => {
    const response = await axios.post('/auth/register', {
      email,
      password,
      first_name,
      last_name,
    });
    const { accessToken, user } = response.data;

    localStorage.setItem('accessToken', accessToken);

    dispatch({
      type: 'REGISTER',
      payload: {
        user,
      },
    });
  };

  // LOGOUT
  const logout = async () => {
    setSession(null);
    dispatch({
      type: 'LOGOUT',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
        register,
        refetchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

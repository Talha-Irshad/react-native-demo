import apiServices from '../../api_services/request-handler';
import { resetNavigationStack } from '@navigation/service';
import { loginKey, logout, saveUser, setToken } from '../../utils/auth.util';
import { setAuthLoading, setUser } from '../slices/auth-slice';
import { flashErrorMessage } from '../../utils/functions';
import { setMembers } from '../slices/member-slice';
import { setTransactions } from '../slices/transaction-slice';

export const login = data => {
  return async dispatch => {
    try {
      dispatch(setAuthLoading(true));
      const response = await apiServices.login(data);
      dispatch(setAuthLoading(false));
      if (response?.data?.status === 'success') {
        await setToken(response?.data?.token);
        await saveUser(response?.data?.data);
        dispatch(setUser(response?.data?.data))
        await loginKey();
        resetNavigationStack('Tabs');
      } else {
        flashErrorMessage(response?.data?.message)
      }
    } catch (error) {
      flashErrorMessage(error?.data?.message)
      dispatch(setAuthLoading(false));
    }
  };
};
export const googleLogin = data => {
  return async dispatch => {
    try {
      dispatch(setAuthLoading(true));
      const response = await apiServices.googleLogin(data);
      dispatch(setAuthLoading(false));
      if (response?.data?.status === 'success') {
        await dispatch(getUserDetail())
        // await setToken(response?.data?.token);
        // await saveUser(response?.data?.data);
        // dispatch(setUser(response?.data?.data))
        // await loginKey();
        // resetNavigationStack('Tabs');
      } else {
        flashErrorMessage(response?.data?.message)
      }
    } catch (error) {
      flashErrorMessage(error?.data?.message)
      dispatch(setAuthLoading(false));
    }
  };
};
export const appleLogin = data => {
  return async dispatch => {
    try {
      dispatch(setAuthLoading(true));
      const response = await apiServices.appleLogin(data);
      dispatch(setAuthLoading(false));
      if (response?.data?.status === 'success') {
        // await setToken(response?.data?.token);
        // await saveUser(response?.data?.data);
        // dispatch(setUser(response?.data?.data))
        // await loginKey();
        // resetNavigationStack('Tabs');
      } else {
        flashErrorMessage(response?.data?.message)
      }
    } catch (error) {
      flashErrorMessage(error?.data?.message)
      dispatch(setAuthLoading(false));
    }
  };
};
export const register = data => {
  return async dispatch => {
    try {
      dispatch(setAuthLoading(true));
      const response = await apiServices.register(data);
      dispatch(setAuthLoading(false));
      if (response?.data?.status === 'success') {
        await setToken(response?.data?.token);
        await saveUser(response?.data?.data);
        dispatch(setUser(response?.data?.data))
        await loginKey();
        resetNavigationStack('Tabs');
      } else {
        flashErrorMessage(response?.data?.message)
      }
    } catch (error) {
      flashErrorMessage(error?.data?.message)
      dispatch(setAuthLoading(false));
    }
  };
};
export const getUserDetail = id => {
  return async dispatch => {
    try {
      dispatch(setAuthLoading(true));
      const response = await apiServices.getUser(id);
      dispatch(setAuthLoading(false));
      if (response?.data?.status === 'success') {
        await saveUser(response?.data?.data?.user);
        dispatch(setUser(response?.data?.data?.user))
      } else {
        flashErrorMessage(response?.data?.message)
      }
    } catch (error) {
      flashErrorMessage(error?.data?.message)
      dispatch(setAuthLoading(false));
    }
  };
};
export const logoutUser = () => {
  return async dispatch => {
    try {
      await logout()
      dispatch(setUser(null))
      dispatch(setMembers(null))
      dispatch(setTransactions(null))
      resetNavigationStack("AuthStack")
    } catch (error) {
      flashErrorMessage(error?.data?.message)
    }
  };
};

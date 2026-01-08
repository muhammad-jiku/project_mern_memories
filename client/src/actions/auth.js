import * as api from '../api/index.js';
import { AUTH } from '../constants/actionTypes';

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    navigate('/');
  } catch (error) {
    console.error(
      'Sign in error:',
      error.response?.data?.message || error.message
    );
    alert(error.response?.data?.message || 'Sign in failed. Please try again.');
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    navigate('/');
  } catch (error) {
    console.error(
      'Sign up error:',
      error.response?.data?.message || error.message
    );
    alert(error.response?.data?.message || 'Sign up failed. Please try again.');
  }
};

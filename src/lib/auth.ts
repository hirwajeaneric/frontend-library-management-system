import { useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { login } from './api';
import { setUser } from '@/store/slices/authSlice';

export const useAuth = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const loginUser = async (credentials: {
    username: string;
    password: string;
  }) => {
    const { data } = await login(credentials);
    dispatch(setUser(data));
    queryClient.setQueryData(['user'], data);
    return data;
  };

  const logout = () => {
    queryClient.removeQueries({ queryKey: ['user'], exact: true });
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  };

  return { loginUser, logout };
};

import { QueryClient } from "react-query";
import { default as AxiosClient } from "axios";
import { tokenService } from "./token";

export const axiosGuest = AxiosClient.create({
  baseURL: `${import.meta.env.VITE_PROXY_URL}/api`,
});

export const axiosUser = AxiosClient.create({
  baseURL: `${import.meta.env.VITE_PROXY_URL}/api`,
});

axiosUser.interceptors.request.use((request) => {
  const token = tokenService.getToken();
  request.headers.Authorization = token ? `Token ${token}` : "";
  return request;
});

axiosUser.interceptors.response.use(
  (response) => response,
  (error) => {
    error = Promise.reject(error);
    if (error.response?.status !== 401) return error;
    if (window.location.pathname === "/") return error;
    window.location.href = "/";
    return error;
  }
);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 2 * 60 * 60,
      cacheTime: 2 * 60 * 60,
    },
  },
});

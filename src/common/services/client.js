import { QueryClient } from "react-query";
import { default as AxiosClient } from "axios";
import { tokenService } from "./auth";

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
    if (error.response?.status !== 401) return;
    if (window.location.pathname === "/") return;
    window.location.href = "/";
    return Promise.reject(error);
  }
);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: import.meta.env.MODE === "development" ? 0 : 2 * 60 * 60,
      cacheTime: import.meta.env.MODE === "development" ? 0 : 2 * 60 * 60,
    },
  },
});

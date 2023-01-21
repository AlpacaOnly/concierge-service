import { axiosGuest, axiosUser } from "../services/client";
import { tokenService } from "../services/token";

import { useQuery, useMutation } from "react-query";
import { queryClient } from "../services/client";

import { hookstate, useHookstate } from "@hookstate/core";

export const userApi = {
  async login({ email, password }) {
    const response = await axiosGuest.post("/auth/token/login/", {
      email,
      password,
    });

    tokenService.setToken(response?.data?.auth_token);
  },

  async logout() {
    await axiosUser.post("/auth/token/logout/");

    tokenService.setToken("");
  },

  async verify() {
    const response = await axiosUser.get("/users/me/");

    return response?.data;
  },

  async update({ id, fields }) {
    return await axiosUser.patch(`/users/${id}/`, fields);
  },
};

const userState = hookstate(null);

export const userHooks = {
  useUser() {
    return useHookstate(userState);
  },

  useUserVerify() {
    return useQuery({ queryKey: ["user"], queryFn: userApi.verify });
  },

  useUserLogin() {
    return useMutation({
      mutationFn: (values) => userApi.login(values),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
    });
  },

  useUserLogout() {
    return useMutation({
      mutationFn: (values) => userApi.logout(values),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
    });
  },

  useUserUpdate() {
    return useMutation({
      mutationFn: (values) => userApi.update(values),
    });
  },
};

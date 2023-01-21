import { axiosUser } from "../services/client";
import { useQuery } from "react-query";

export const citiesApi = {
  async get() {
    const response = await axiosUser.get("/users/cities/");
    return response?.data;
  },
};

export const citiesHooks = {
  useCities() {
    return useQuery({ queryKey: ["cities"], queryFn: citiesApi.get });
  },
};

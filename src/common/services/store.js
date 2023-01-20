import { useQuery, useMutation } from "react-query";
import { queryClient } from "./client";
import { authService } from "./auth";

export const useUser = () => useQuery({ queryKey: ["user"], queryFn: authService.verify });

export const useUserLogin = () =>
  useMutation({
    mutationFn: (values) => authService.login(values),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
  });

export const useUserLogout = () =>
  useMutation({
    mutationFn: (values) => authService.logout(values),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
  });

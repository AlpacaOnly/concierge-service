import { axiosGuest, axiosUser } from "./client";

class TokenStore {
  token = localStorage.getItem("token");

  getToken() {
    return this.token;
  }

  setToken(value) {
    this.token = value;
    localStorage.setItem("token", value);
  }
}

export const tokenService = new TokenStore();

class AuthService {
  async login({ email, password }) {
    const response = await axiosGuest.post("/auth/token/login/", {
      email,
      password,
    });

    tokenService.setToken(response?.data?.auth_token);
  }

  async logout() {
    await axiosUser.post("/auth/token/logout/");

    tokenService.setToken("");
  }

  async verify() {
    const response = await axiosUser.get("/users/me");

    return response?.data;
  }
}

export const authService = new AuthService();

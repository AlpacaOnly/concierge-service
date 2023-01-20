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

export const store = new TokenStore();

class AuthService {
  async login(email, password) {
    const response = await axiosGuest.post("/auth/token/login/", {
      email,
      password,
    });

    store.setToken(response?.data?.auth_token);
  }

  async logout(email, password) {
    await axiosUser.post("/auth/token/logout/");

    store.setToken(undefined);
  }

  async verify() {
    const response = await axiosUser.get("/users/me");

    return response?.data;
  }
}

export const auth = new AuthService();

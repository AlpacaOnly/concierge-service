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

import { create } from "zustand";

export const useUserStore = create((set) => ({
  jwtToken: null,
  username: null,
  login: (username, jwtToken) =>
    set(() => ({
      username: username,
      jwtToken: jwtToken,
    })),
  logout: () =>
    set(() => ({
      username: null,
      jwtToken: null,
    })),
}));

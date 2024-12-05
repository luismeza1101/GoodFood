import { Type_User } from "@/types/types";
import { create } from "zustand";

type AuthStore = {
  user: Type_User | null
  isAuth: boolean;
  setUser: (user: Type_User) => void
  setIsAuth: (isAuth: boolean) => void;
};

export const authStore = create<AuthStore>()((set) => ({
  user: null,
  isAuth: false,
  setUser: (user) => 
    set(() => ({
      user: user
    })),
  setIsAuth: (isAuth) =>
    set(() => ({
      isAuth: isAuth,
    })),
}));

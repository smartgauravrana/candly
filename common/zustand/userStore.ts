import create from "zustand";
import User from "../models/user.model";

interface UserState {
  loading: boolean;
  data: User | null;
  setUserData: (state: Partial<UserState>) => void;
}

const useUserStore = create<UserState>((set) => ({
  loading: true,
  data: null,
  setUserData: (data) => set((state: any) => ({ ...state, ...data })),
}));

export default useUserStore;

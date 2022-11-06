import create from "zustand";

const useUserStore = create((set) => ({
  loading: false,
  name: "",
  email: "",
  setUserData: (data = {}) => set((state) => ({ ...state, ...data })),
}));

export default useUserStore;

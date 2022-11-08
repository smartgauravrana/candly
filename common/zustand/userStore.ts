import create from "zustand";

const useUserStore = create((set) => ({
  loading: true,
  data: null,
  setUserData: (data = {}) => set((state: any) => ({ ...state, ...data })),
}));

export default useUserStore;

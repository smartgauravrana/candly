import { useUserStore } from "../zustand";

export function useSession() {
  const { loading, data } = useUserStore(({ loading, data }) => ({
    loading,
    data,
  }));

  return { loading, data };
}

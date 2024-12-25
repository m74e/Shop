import { create } from "zustand";

const useStore = create((set) => ({
  count: JSON.parse(localStorage.getItem("count")) || 1,
  inc: () =>
    set((state) => {
      const newCount = state.count + 1;
      localStorage.setItem("count", JSON.stringify(newCount));
      return { count: newCount };
    }),
  dec: () =>
    set((state) => {
      const newCount = state.count - 1;
      localStorage.setItem("count", JSON.stringify(newCount));
      return { count: newCount };
    }),
}));

export default useStore;

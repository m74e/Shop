import { create } from "zustand";

const useStore = create((set) => ({
  count: 1,
  //fav
  wishList:[],
  setWishList:(wishList)=>set({wishList}),
  //next
  inc: () => set((state) => ({ count: state.count + 1 })),


}))

export default useStore;

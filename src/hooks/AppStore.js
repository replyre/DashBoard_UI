import { create } from "zustand";

const AppStore = create((set) => ({
  navcolor: "white",
  dopen: true,
  updateOpen: () => set((state) => ({ dopen: !state.dopen })),
  updateColor: () =>
    set((state) => ({
      navcolor: state.navcolor,
    })),
}));

export default AppStore;

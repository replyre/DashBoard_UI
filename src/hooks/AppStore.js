import { create } from "zustand";

const AppStore = create((set) => ({
  dopen: true,
  updateOpen: () => set((state) => ({ dopen: !state.dopen })),
}));

export default AppStore;

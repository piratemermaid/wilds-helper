import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  selectedMonster: string | null;
  setSelectedMonster: (name: string) => void;
};

export const useStore = create<State, [['zustand/persist', Partial<State>]]>(
  persist(
    (set, get) => ({
      selectedMonster: null,
      setSelectedMonster: (name) =>
        set({ selectedMonster: name !== get().selectedMonster ? name : null }),
    }),
    {
      name: 'userSettings',
      partialize: (state: State) => ({
        selectedMonster: state.selectedMonster,
      }),
    }
  )
);

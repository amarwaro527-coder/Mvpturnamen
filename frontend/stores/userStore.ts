import { create } from 'zustand';

interface UserState {
  userId: string | null;
  nickname: string | null;
  avatarUrl: string | null;
  setUser: (p: Partial<UserState>) => void;
}

export const useUserStore = create<UserState>((set) => ({
  userId: null,
  nickname: null,
  avatarUrl: null,
  setUser: (p) => set((s) => ({ ...s, ...p })),
}));

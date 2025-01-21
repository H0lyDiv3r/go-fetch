import { create } from "zustand";

type countStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
};

export const useCountStore = create<countStore>((set, get) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set((state) => ({ count: state.count - get().count })),
}));

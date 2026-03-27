import { create } from "zustand";

const useMacbookStore = create((set) => ({
    color: "#2e2c2e",
    setColor: (color) => set({ color }),

    colorName: "Dark",
    setColorName: (colorName) => set({ colorName }),

    scale: 0.08,
    setScale: (scale) => set({ scale }),

    sizeInInches: '16"',
    setSizeInInches: (sizeInInches) => set({ sizeInInches }),

    reset: () =>
        set({
            color: "#2e2c2e",
            colorName: "Dark",
            scale: 0.08,
            sizeInInches: '16"',
        }),}));

export default useMacbookStore;

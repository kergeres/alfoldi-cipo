import Aura from "@primeuix/themes/aura";
import { definePreset } from "@primeuix/themes";

// TO DO: find nice brown palette
export const primeVueThemeConfig = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#f4e6dc",
      100: "#ebd4c6",
      200: "#d9b19a",
      300: "#a4745a",
      400: "#3b2415",
      500: "#331f12",
      600: "#2b1a0f",
      700: "#24150c",
      800: "#1d1009",
      900: "#160b06",
      950: "#100704",
    },
  },
});

import "@fontsource/poppins";
import { extendTheme } from "@chakra-ui/react";

export const brandTheme = extendTheme({
  colors: {
    primary: "#A6DC0D",
    secondary: "#A9AD9B",
    highlight: "#454839",
    warning: "#00D3F8",
    danger: "#009AC0",
  },
  fonts: {
    body: "poppins, Georgia, sans-serif",
    // heading: "poppins, Georgia, serif",
    mono: "Menlo, monospace",
  },
});

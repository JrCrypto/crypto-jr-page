// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  colors: {
    primary: "#F6931E",
    black: "#000000",
    lightGray: "#DBD3D3",
    white: "#FFFFFF",
  },
  fonts: {
    body: "Inter, sans-serif",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        textTransform: "uppercase",
        bg: "primary.500",
        color: "white",
        _hover: {
          bg: "primary.600",
        },
      },
      variants: {
        outline: {
          borderColor: "primary.500",
          color: "primary.500",
          _hover: {
            bg: "primary.50",
          },
        },
      },
    },
  },
});

export default theme;

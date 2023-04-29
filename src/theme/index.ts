// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  colors: {
    primary: "#F6931E",
    black: "#000000",
    lightGray: "#DBD3D3",
    white: "#FFFFFF",
    "primary.600": "#dd841b",
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
      variants: {
        outline: {
          borderColor: "primary",
          color: "primary",
          bg:"none",
          _hover: {
            bg: "primary.600",
            color:"white"
          },
        },
        default: {
          fontWeight: "bold",
          radius:20,
          textTransform: "uppercase",
          bg: "primary",
          color: "white",
          _hover: {
            bg: "primary.600",
          },
        },
      },
       // Definindo a variante outline como padrão
       defaultProps: {
        variant: "default",
      },
    },
  },
});

export default theme;

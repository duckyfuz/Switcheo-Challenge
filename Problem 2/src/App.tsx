import React from "react";
import "./App.css";
import FancyForm from "./components/FancyForm";

// When using TypeScript 4.x and above
import type {} from "@mui/lab/themeAugmentation";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTimeline: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FancyForm />
    </ThemeProvider>
  );
}

export default App;

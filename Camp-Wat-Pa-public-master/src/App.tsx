import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./routes/HomeLayout/HomeLayout";
import Home from "./routes/HomeLayout/routes/Home";
import { primaryTheme } from "./scss/theme";

function App() {
  return (
    <ThemeProvider theme={primaryTheme}>
      <StyledEngineProvider injectFirst>
        <Router>
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;

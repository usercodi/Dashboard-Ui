import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Box sx={{ display: "flex", backgroundColor: "#141625", minHeight: "100vh" }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor: "#141625"}}>
        <Header />
        <Dashboard />
      </Box>
    </Box>
  );
}
 
export default App;

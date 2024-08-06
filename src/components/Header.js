import React from "react";
import { Box, InputBase, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";

const Header = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <SearchIcon sx={{ color: "#858585" }} />
        <InputBase
          placeholder="Search"
          sx={{ ml: 1, flex: 1, color: "#858585", backgroundColor: "#1F2431", borderRadius: 2, padding: 0.5 }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <MailIcon sx={{ color: "#858585", mr: 2 }} />
        <NotificationsIcon sx={{ color: "#858585", mr: 2 }} />
        <Avatar alt="User Avatar" src="frn11.jpg" />
      </Box>
    </Box>
  );
};

export default Header;

import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Settings, Restaurant, MenuBook, ChevronRight } from "@mui/icons-material";

const ActionItems = () => {
  const items = [
    { icon: <Settings sx={{ color: "#EA3D2F" }} />, text: "Goals" },
    { icon: <Restaurant sx={{ color: "#557CE8" }} />, text: "Popular Dishes" },
    { icon: <MenuBook sx={{ color: "#24AE8F" }} />, text: "Menus" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#1E1E2F",
        padding: "31px",
        borderRadius: "12px",
      }}
    >
      <List>
        {items.map((item, index) => (
          <ListItem key={index} button sx={{ padding: "10px 0", display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={<Typography color="#FFF">{item.text}</Typography>} />
            </Box>
            <ChevronRight sx={{ color: "#AAA" }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ActionItems;

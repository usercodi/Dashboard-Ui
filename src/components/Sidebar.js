import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import WindowIcon from '@mui/icons-material/Window';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import RestorePageIcon from '@mui/icons-material/RestorePage';
const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 60,
        bgcolor: "#1F2431",
        color: "#fff",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ListItem button>
          <ListItemIcon sx={{ color: "#fff"}}>
            <WindowIcon  />
          </ListItemIcon>
          </ListItem>
      <Box sx={{ height: 60 }} />
      
      <List sx={{ width: '100%' }}>
      
        <ListItem button>
          <ListItemIcon sx={{ color: "#fff" }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText />
        </ListItem>
        <ListItem button>
          <ListItemIcon sx={{ color: "#fff" }}>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText />
        </ListItem>
        <ListItem button>
          <ListItemIcon sx={{ color: "#fff" }}>
            <AnalyticsIcon />
          </ListItemIcon>
          <ListItemText />
        </ListItem>
        <ListItem button>
          <ListItemIcon sx={{ color: "#fff" }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText />
        </ListItem>
        <ListItem button>
          <ListItemIcon sx={{ color: "#fff" }}>
            <RestorePageIcon />
          </ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
      <ListItem button sx={{ mt: "auto" }}> {/* Margin top auto to push it to the bottom */}
        <ListItemIcon sx={{ color: "#fff"  }} >
          <PowerSettingsNewIcon   />
        </ListItemIcon>
        <ListItemText />
      </ListItem>
    </Box>
  );
};

export default Sidebar;

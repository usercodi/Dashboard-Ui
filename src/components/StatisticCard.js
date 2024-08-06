import React from "react";
import { Box, Typography } from "@mui/material";

const StatisticCard = ({ title, value, percentage, icon, iconColor }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E1E2F",
        padding: "10px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%", // Takes full height of the grid cell
      }}
    >
        
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <Box
          sx={{
            backgroundColor: iconColor,
            borderRadius: "50%",
            padding: "10px",
            marginRight: "10px",
          }}
        >
          {icon}
        </Box>
        <Typography variant="body1" color="#FFF">
          {title}
        </Typography>
      </Box>
      <Typography variant="h4" color="#FFF">
        {value}
      </Typography>
      <Typography
        variant="subtitle2"
        color={percentage >= 0 ? "green" : "red"}
      >
        {percentage >= 0 ? `▲ ${percentage}%` : `▼ ${percentage}%`}
      </Typography>
    </Box>
  );
};

export default StatisticCard;

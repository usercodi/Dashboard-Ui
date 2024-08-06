import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

const NetProfit = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E1E2F",
        padding: "4px",
        borderRadius: "12px",
        display: "flex",
        height: "100%", // Takes full height of the grid cell
      }}
    >
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Typography variant="body2" color="#FFF" mb={0.5}>
          Net Profit
        </Typography>
        <Typography variant="h5" color="#FFF">
          $6759.25
        </Typography>
        <Typography variant="subtitle2" color="green" mt={0.5}>
          ▲ 3%
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          ml: 23, // Increased margin left to move the circle further right
        }}
      >
        <CircularProgress
          variant="determinate"
          value={70}
          size={80}
          sx={{
            color: "#8884d8",
            position:"absolute",
          }}
        />
        <Typography variant="body2" color="#FFF" sx={{ position: "absolute" }}>
          70%
        </Typography>
      
      <Typography variant="caption" color="#AAA" mt={11}>
        *values rounded off.
      </Typography>
    </Box>
    </Box>
  );
};

export default NetProfit;
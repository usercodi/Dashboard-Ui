import React from "react";
import { Grid, Box } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import LocalShipping from "@mui/icons-material/LocalShipping";
import Cancel from "@mui/icons-material/Cancel";
import MonetizationOn from "@mui/icons-material/MonetizationOn";
import StatisticCard from "./StatisticCard";
import NetProfit from "./NetProfit";
import ActivityChart from "./ActivityChart";
import RecentOrders from "./RecentOrders";
import CustomerFeedback from "./CustomerFeedback";
import ActionItems from "./ActionItems";

const Dashboard = () => {
    const statistics = [
      {
        title: "Total Orders",
        value: "75",
        percentage: 3,
        icon: <ShoppingCart sx={{ color: "#FFF" }} />,
        iconColor: "#557CE8",
      },
      {
        title: "Total Delivered",
        value: "70",
        percentage: -3,
        icon: <LocalShipping sx={{ color: "#FFF" }} />,
        iconColor: "#4CAF50",
      },
      {
        title: "Total Cancelled",
        value: "05",
        percentage: 3,
        icon: <Cancel sx={{ color: "#FFF" }} />,
        iconColor: "#EA3D2F",
      },
      {
        title: "Total Revenue",
        value: "$12k",
        percentage: -3,
        icon: <MonetizationOn sx={{ color: "#FFF" }} />,
        iconColor: "#FF5722",
      },
    ];
  
    return (
      <Box sx={{ padding: "5px" }}>
       
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
        
            <Grid container spacing={2}>
              {statistics.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <StatisticCard
                    title={stat.title}
                    value={stat.value}
                    percentage={stat.percentage}
                    icon={stat.icon}
                    iconColor={stat.iconColor}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid  item xs={12} md={4}>
            <NetProfit />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ marginTop: "20px" }}>
          <Grid item xs={12} md={8}>
            <ActivityChart />
          </Grid>
          <Grid item xs={12} md={4}>
            <ActionItems />
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ marginTop: "20px" }}>
          <Grid item xs={12} md={8}>
            <RecentOrders />
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomerFeedback />
          </Grid>
        </Grid>
      </Box>
    );
};

export default Dashboard;

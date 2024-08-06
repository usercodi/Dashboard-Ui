import React from "react";
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";

const RecentOrders = () => {
  const orders = [
    { customer: "Wade Warren", image: "/frn22.jpg", orderNo: "15478256", amount: "$124.00", status: "Delivered" },
    { customer: "Bessie Cooper", image: "/frn11.jpg", orderNo: "15478257", amount: "$89.99", status: "Cancelled" },
    { customer: "Marvin McKinney", image: "/frn22.jpg", orderNo: "15478258", amount: "$59.50", status: "Delivered" },
    { customer: "Kathryn Murphy", image: "/frn55.jpg", orderNo: "15478259", amount: "$199.00", status: "Delivered" },
    { customer: "Theresa Webb", image: "/frn22.jpg", orderNo: "15478260", amount: "$75.25", status: "Cancelled" },
    { customer: "Savannah Nguyen", image: "/frn11.jpg", orderNo: "78514568", amount: "$128.25", status: "Delivered" }
  ];

  return (
    <Paper elevation={3} sx={{ p: 2, backgroundColor: "#1F2431", color: "#fff", height: "100%", width: "100%", maxWidth: "1200px", margin: "auto" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Recent Orders
      </Typography>
      <TableContainer sx={{ width: '100%' }}>
        <Table sx={{ width: '100%' }}>
        
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#fff' }}>Customer</TableCell>
              <TableCell sx={{ color: '#fff' }}>Order No.</TableCell>
              <TableCell sx={{ color: '#fff' }}>Amount</TableCell>
              <TableCell sx={{ color: '#fff' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={order.image}  style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '8px' }} />
                    <Typography variant="body1" style={{ color: '#fff' }}>{order.customer}</Typography>
                  </div>
                </TableCell>
                <TableCell style={{ color: '#fff' }}>{order.orderNo}</TableCell>
                <TableCell style={{ color: '#fff' }}>{order.amount}</TableCell>
                <TableCell>
                  {order.status === 'Delivered' ? (
                    <Button variant="contained" style={{ backgroundColor: 'green', color: '#fff', borderRadius: '35%' }}>
                      Delivered
                    </Button>
                  ) : (
                    <Button variant="contained" style={{ backgroundColor: 'red', color: '#fff', borderRadius: '35%' }}>
                      Cancelled
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RecentOrders;
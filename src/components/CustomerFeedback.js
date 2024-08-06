import React from "react";
import { Paper, Typography, List, ListItem, Avatar, ListItemText, Box, Divider } from "@mui/material";
import RatingStars from "react-rating-stars-component"; // Import the rating component

const CustomerFeedback = () => {
  const reviews = [
    {
      name: "Jenny Wilson",
      rating: 4,
      review: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies."
    },
    {
      name: "Dianne Russell",
      rating: 5,
      review: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service."
    },
    {
      name: "Devon Lane",
      rating: 4,
      review: "Normally wings are wings, but theirs are lean, meaty, and tender, and they are very conscientious about gluten allergies."
    }
  ];

  return (
    <Paper elevation={3} sx={{ p: 2, backgroundColor: "#1F2431", color: "#fff", height: "auto", margin: 'auto' }}>
      <Typography variant="h6" sx={{ mb: 0.3 }}>
        Customer's Feedback
      </Typography>
      <List>
        {reviews.map((review, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt={review.name} src="/frn22.jpg" sx={{ mr: 1 }} />
                    <Typography variant="body1">{review.name}</Typography>
                  </Box>
                }
                secondary={
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.1 }}>
                      <RatingStars {...{ size: 24, value: review.rating, edit: false, isHalf: false, color: "#e4e5e9", activeColor: "#ffd700" }} />
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#fff" }}>
                      {review.review}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
            <Divider sx={{ backgroundColor: "#fff", my: 1 }} /> {/* Horizontal line after each review */}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default CustomerFeedback;
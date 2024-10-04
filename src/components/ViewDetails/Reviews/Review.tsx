import React from "react";
import UserReview from "../../../models/UserReview";
import { Rating } from "@mui/material";
import "./Reviews.css";

const Review: React.FC<{review:UserReview}>= ({review}) => {
    const date = new Date(review.date);
    const options: object = {
      year:"numeric",
      month:"long"
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
  return (
    <div key={review.reviewerEmail} className="review-card-wrapper">
      <div className="review-card">
        <div className="reviewer-name">
          <h3>{review.reviewerName}</h3>
        </div>
        <div className="reviewer-email">
          <h4>{review.reviewerEmail}</h4>
        </div>
        <div className="reviewer-comment">
          <p>{review.comment}</p>
        </div>
          <div className="review-rating">  
                  <Rating
                  name="hover-feedback"
                  value={review.rating}
                  precision={0.5}
                /></div> 
        <div className="review-date"><p>{formattedDate}</p></div>
      </div>
    </div>
  );
};

export default Review;

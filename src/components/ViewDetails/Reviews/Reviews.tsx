import React from "react";
import "./Reviews.css";
import UserReview from "../../../models/UserReview";
import Review from "./Review";

const Reviews: React.FC<{ reviews: Array<UserReview> }> = ({ reviews }) => {
  return (
    <>
      <section className="reviews">
        <div className="reviews-content">
          <div className="reviews-title">
            <h2>Reviews</h2>
          </div>
          <div className="review-card-main">
            {reviews.map((element,index) => (
                <Review key={index} review={element} />
            )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;

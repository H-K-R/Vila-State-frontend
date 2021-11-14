import React from "react";

const ReviewsCards = ({ reviews }) => {
  return (
    <div className="my-5">
      <h3 className="text-center mt-5 mb-3 h1">Our Reviews</h3>
      <div className="row">
        {reviews.map((review) => (
          <div className="col-md-4" key={review._id}>
            <div className="bg-light p-3 mb-3 text-center">
              <h4>{review.name}</h4>
              <p>{review.desc}</p>
              <p>{review.rating}/5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsCards;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReviewsCards from "../component/ReviewsCards";
import VilaCard from "../component/VilaCard";

const Home = () => {
  const [vila, setVilas] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://boiling-plains-50382.herokuapp.com/vilas")
      .then((res) => setVilas(res.data.slice(0, 6)));

    axios
      .get("https://boiling-plains-50382.herokuapp.com/reviews")
      .then((res) => setReviews(res.data));
  }, []);

  return (
    <div>
      <div className="container banner my-2 p-5 mb-3">
        <h2>Find Best Vila State in Your Area</h2>
        <p>
          The Best Affordable Vilas in Your Area. Find Your Suitable Vila and
          Purchase Today !
        </p>
        <Link className="btn btn-primary" to="/explore">
          Find Vilas
        </Link>
      </div>

      <div className="container">
        <h3 className="text-center mt-5 mb-3 h1">Featured Vilas</h3>
        <div className="row">
          {vila.map((v) => (
            <div key={v._id} className="col-md-4">
              <VilaCard villa={v} />
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <ReviewsCards reviews={reviews} />
      </div>

      <div className="container bg-warning text-center my-2 p-5 mb-3">
        <h2>Its Cheap! </h2>
        <p>
          The Best Affordable Vilas in Your Area. Find Your Suitable Vila and
          Purchase Today !
        </p>
        <Link className="btn btn-dark" to="/explore">
          {" "}
          Find Vilas{" "}
        </Link>
      </div>
    </div>
  );
};

export default Home;

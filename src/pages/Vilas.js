import axios from "axios";
import React, { useEffect, useState } from "react";
import VilaCard from "../component/VilaCard";

const Vilas = () => {
  const [vila, setVilas] = useState([]);

  useEffect(() => {
    axios
      .get("https://boiling-plains-50382.herokuapp.com/vilas")
      .then((res) => setVilas(res.data.slice(0, 6)));
  }, []);

  return (
    <div className="container my-3">
      <div className="bg-light p-5 text-center mb-4">
        <h1>All Available Villas to Purchase</h1>
      </div>
      <div className="row">
        {vila.map((v) => (
          <div key={v._id} className="col-md-4">
            <VilaCard villa={v} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vilas;

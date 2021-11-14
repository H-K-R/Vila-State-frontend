import React from "react";
import { useHistory } from "react-router";

const VilaCard = ({ villa }) => {
  const history = useHistory();

  const addHandler = () => {
    localStorage.setItem("cart", JSON.stringify(villa));
    history.push("/purchase");
  };

  return (
    <div className="card">
      <img src={villa.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{villa.name}</h5>
        <p className="card-text">{villa.desc}</p>
        <p className="card-text">
          {" "}
          <strong>Price:</strong> ${villa.price}
        </p>
        <button className="btn btn-primary" onClick={addHandler}>
          Purchase
        </button>
      </div>
    </div>
  );
};

export default VilaCard;

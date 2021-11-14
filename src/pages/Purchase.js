import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router";

const Purchase = () => {
  const [item, setItem] = useState(null);

  const { register, handleSubmit } = useForm();

  const { user } = useAuth();

  const history = useHistory();

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    setItem(JSON.parse(cart));
  }, []);

  const onSubmit = (data) => {
    if (!item) return alert("Please Choose a Villa");

    axios
      .post("https://boiling-plains-50382.herokuapp.com/order", {
        ...data,
        item: item,
        status: "Pending",
      })
      .then((res) => {
        localStorage.removeItem("cart");
        history.push("/dashboard/orders");
      });
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("fullName")}
              type="text"
              placeholder="Full Name"
              className="form-control mb-3"
              defaultValue={user.displayName}
            />
            <input
              {...register("email")}
              type="text"
              placeholder="Email"
              className="form-control mb-3"
              defaultValue={user.email}
            />
            <input
              {...register("number")}
              type="text"
              placeholder="Phone Number"
              className="form-control mb-3"
            />
            <input
              {...register("address")}
              type="text"
              placeholder="Address"
              className="form-control mb-3"
            />
            <button className="btn btn-dark w-100">Purchase</button>
          </form>
        </div>
        <div className="col-md-4">
          {item ? (
            <div>
              <p>
                <strong>Villa Name</strong>: {item.name}
              </p>
              <p>
                <strong>Villa Price</strong>: ${item.price}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Purchase;

import axios from "axios";
import React from "react";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    axios.post("https://boiling-plains-50382.herokuapp.com/vila", data).then((res) => {
      if (res.data) return history.push("/explore");
    });
  };

  return (
    <div>
      <h2>Add Villa</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          type="text"
          placeholder="Villa Name"
          className="form-control w-75 mb-3"
        />
        <input
          {...register("price")}
          type="number"
          placeholder="Villa Price"
          className="form-control w-75 mb-3"
        />
        <input
          {...register("image")}
          type="text"
          placeholder="Villa Image"
          className="form-control w-75 mb-3"
        />
        <textarea
          {...register("desc")}
          row="5"
          className="form-control w-75 mb-3"
          placeholder="Short Description"
        ></textarea>
        <button className="btn btn-dark">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;

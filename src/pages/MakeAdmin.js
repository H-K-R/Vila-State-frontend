import axios from "axios";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://boiling-plains-50382.herokuapp.com/user?email=${email}`).then((res) => {
      alert("Admin Creted");
      setEmail("");
    });
  };

  return (
    <div>
      <h4>Make Admin</h4>
      <form onSubmit={onSubmit} className="d-flex w-50 gap-2">
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email address"
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;

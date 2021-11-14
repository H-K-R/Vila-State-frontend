import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { registerUser, user } = useAuth();

  const { register, handleSubmit } = useForm();

  const history = useHistory();
  const location = useLocation();
  const onSubmit = (data) => {
    registerUser(data.name, data.email, data.password);
  };

  useEffect(() => {
    user && history.push(location?.state?.from || "/dashboard");
  }, [user, history, location?.state?.from]);

  return (
    <div>
      <div className="container py-5">
        <div className="w-50 mx-auto">
          <h2>Register</h2>
          <form className="my-3" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              type="text"
              placeholder="Full Name"
              className="form-control mb-3"
              required
            />
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="form-control mb-3"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control mb-3"
              {...register("password")}
              required
            />
            <input type="submit" className="btn btn-dark" value="Register" />
          </form>
          <Link className="nav-link" to="/login">
            Sign in with Existing Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

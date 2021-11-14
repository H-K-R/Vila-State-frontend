import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { signInUser, user } = useAuth();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    signInUser(data.email, data.password);
  };
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    user && history.push(location?.state?.from || "/dashboard");
  }, [user, history, location?.state?.from]);

  return (
    <div>
      <div className="container py-5">
        <div className="w-50 mx-auto">
          <h2>Login</h2>
          <form className="my-3" onSubmit={handleSubmit(onSubmit)}>
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
            <input type="submit" className="btn btn-dark" value="Login" />
          </form>
          <Link className="nav-link" to="/register">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

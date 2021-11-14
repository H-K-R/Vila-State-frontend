import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const Reviews = () => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();
  const { user } = useAuth();

  const onSubmit = (data) => {
    axios.post("https://boiling-plains-50382.herokuapp.com/review", data).then((res) => {
      if (res.data) return history.push("/");
    });
  };

  return (
    <div>
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          defaultValue={user.displayName}
          type="text"
          placeholder="Your Name"
          className="form-control w-75 mb-3"
          required
        />
        <input
          required
          {...register("rating")}
          type="number"
          placeholder="Rating 0-5"
          className="form-control w-75 mb-3"
        />
        <textarea
          {...register("desc")}
          className="form-control mb-3 w-75"
          placeholder="Write Something"
        ></textarea>
        <button className="btn btn-dark">Submit</button>
      </form>
    </div>
  );
};

export default Reviews;

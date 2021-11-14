import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const AdminProducts = () => {
  const [orders, setOrders] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    axios.get(`https://boiling-plains-50382.herokuapp.com/vilas`).then((res) => setOrders(res.data));
  }, [user.email]);

  const deleteOrder = (id) => {
    axios.delete(`https://boiling-plains-50382.herokuapp.com/vila?id=${id}`).then((res) => {
      const old = [...orders];
      const filtered = old.filter((o) => o._id !== id);
      setOrders(filtered);
    });
  };

  return (
    <div>
      {orders.map((order, index) => (
        <div
          key={order._id}
          className="order d-flex justify-content-between align-items-center gap-2 bg-dark text-white p-3 mb-2"
        >
          <p className="mb-0">{index + 1}</p>
          <p className="mb-0">{order.name}</p>
          <p className="mb-0">${order.price}</p>
          <a
            href={order.image}
            target="_blank"
            rel="noreferrer"
            className="mb-0 text-white"
          >
            View Image
          </a>
          <p className="mb-0">
            <button
              className="btn btn-danger"
              onClick={() => deleteOrder(order._id)}
            >
              Delete
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default AdminProducts;

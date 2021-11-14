import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`https://boiling-plains-50382.herokuapp.com/orders`)
      .then((res) => setOrders(res.data));
  }, [user.email]);

  const deleteOrder = (id) => {
    axios.delete(`https://boiling-plains-50382.herokuapp.com/order?id=${id}`).then((res) => {
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
          <p className="mb-0">{order.fullName}</p>
          <p className="mb-0">{order.address}</p>
          <p className="mb-0">{order.item.name}</p>
          <p className="mb-0">${order.item.price}</p>
          <p className="mb-0">{order.item.status}</p>
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

export default AdminOrders;

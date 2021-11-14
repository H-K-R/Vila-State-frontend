import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Sidebar = ({ url }) => {
  const { userRole } = useAuth();

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <Link className="text-dark" to={`${url}/pay`}>
            Pay
          </Link>
        </li>
        <li className="list-group-item">
          <Link className="text-dark" to={`${url}/orders`}>
            Orders
          </Link>
        </li>
        <li className="list-group-item">
          <Link className="text-dark" to={`${url}/reviews`}>
            Reviews
          </Link>
        </li>
        {userRole && (
          <>
            <li className="list-group-item">
              <Link className="text-dark" to={`${url}/add-products`}>
                Add Products
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="text-dark" to={`${url}/manage-products`}>
                Manage Products
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="text-dark" to={`${url}/manage-orders`}>
                Manage Orders
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="text-dark" to={`${url}/makeadmin`}>
                Make Admin
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;

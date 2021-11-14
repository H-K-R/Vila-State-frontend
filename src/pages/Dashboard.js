import React from "react";
import { useRouteMatch } from "react-router";
import PrivateRoute from "../component/PrivateRoute";
import Sidebar from "../component/Sidebar";
import Pay from "../pages/Pay";
import Orders from "../pages/Orders";
import Reviews from "../pages/Reviews";
import AdminRoute from "../component/AdminRoute";
import AddProduct from "../pages/AddProduct";
import AdminProducts from "../pages/AdminProducts";
import AdminOrders from "../pages/AdminOrders";
import MakeAdmin from "./MakeAdmin";

const Dashboard = () => {
  const { url } = useRouteMatch();

  return (
    <div className="container-fluid my-4">
      <div className="row">
        <div className="col-2">
          <Sidebar url={url} />
        </div>
        <div className="col-10">
          <div className="bg-light p-4 border-rounded">
            <PrivateRoute path={`${url}/pay`}>
              <Pay />
            </PrivateRoute>

            <PrivateRoute path={`${url}/orders`}>
              <Orders />
            </PrivateRoute>

            <PrivateRoute path={`${url}/reviews`}>
              <Reviews />
            </PrivateRoute>

            <AdminRoute path={`${url}/add-products`}>
              <AddProduct />
            </AdminRoute>

            <AdminRoute path={`${url}/manage-products`}>
              <AdminProducts />
            </AdminRoute>

            <AdminRoute path={`${url}/manage-orders`}>
              <AdminOrders />
            </AdminRoute>

            <AdminRoute path={`${url}/makeadmin`}>
              <MakeAdmin />
            </AdminRoute>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

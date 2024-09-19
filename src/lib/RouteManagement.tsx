import SuspenseComp from "@/components/SuspenseComp";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomeLt = lazy(() => import("../layouts/HomeLayout"));
const DashboardLt = lazy(() => import("../layouts/DashboardLayout"));
const DashboardPg = lazy(() => import("../pages/DashboardPage"));
const ProductPg = lazy(() => import("../pages/ProductPage"));
const BrandsPg = lazy(() => import("../pages/BrandsPage"));

const RouteManagement = () => {
  return (
    <Routes>
      <Route path="*" element={<div className="text-center ">404</div>}></Route>
      <Route path="/" element={<HomeLt />} />
      <Route path="/dashboard" element={<DashboardLt />}>
        <Route
          path="home"
          element={
            <SuspenseComp>
              <DashboardPg />
            </SuspenseComp>
          }
        />
        <Route
          path=""
          element={
            <div className="text-center w-full h-full flex-grow rounded-md uppercase flex justify-center items-center text-3xl selection:bg-sky-500 selection:text-white bg-gray-100 ">
              Welcome to admin dashboard
            </div>
          }
        />

        <Route
          path="products"
          element={
            <SuspenseComp>
              <ProductPg />
            </SuspenseComp>
          }
        />
        <Route
          path={"categories"}
          element={<div className="text-center ">Categories</div>}
        />

        <Route
          path={"brands"}
          element={
            <SuspenseComp>
              <BrandsPg />
            </SuspenseComp>
          }
        />
        <Route
          path="orders"
          element={<div className="text-center ">Orders</div>}
        />
        <Route
          path="invoices"
          element={<div className="text-center ">Invoices</div>}
        />
        <Route
          path="users"
          element={<div className="text-center ">Users</div>}
        />
        <Route
          path="settings"
          element={<div className="text-center ">Settings</div>}
        />
        <Route
          path="reviews"
          element={<div className="text-center text-black ">Reviews</div>}
        />
      </Route>
    </Routes>
  );
};

export default RouteManagement;

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { axiosInstance } from "@/config/axiosConfig";
import { AxiosError } from "axios";
import { ErrorResponse } from "@/pages/HomePage";
import toast from "react-hot-toast";
import SideBar from "@/components/SideBar";
import { useQuery } from "@tanstack/react-query";
import DashLoading from "@/components/DashLoading";
import { addAdmin } from "@/app/features/adminInfoSlice";
import { useAppDispatch } from "@/app/hooks";

const DashboardLayout = () => {
  useEffect(() => {
    document.title = "Admin Dashboard";
  }, []);
  const dispatch = useAppDispatch();
  const checkSession = async () => {
    try {
      const res = await axiosInstance.get("admin/auth/session");
      return res.data;
    } catch (error) {
      const err = error as AxiosError<ErrorResponse>;
      throw new Error(err.response?.data?.message || "An error occurred");
    }
  };
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["session"],
    queryFn: checkSession,
    staleTime: 1000 * 60 * 5,
  });
  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center bg-white">
        <DashLoading />
      </div>
    );
  }
  if (isError) {
    toast.error(error.message);
  }

  if (!data?.success) {
    return <div>{data?.message}</div>;
  }
  if (data.success) {
    // const dataProp = {
    //   name: data.admin.name,
    //   email: data.admin.email,
    //   id: data.admin.id,
    //   phone: data.admin.phone,
    //   profileImage: data.admin.profileImage,
    //   role: data.admin.role,
    // };
    dispatch(addAdmin(data.user));
  }

  return (
    <div className="flex h-screen justify-start flex-col items-center">
      <Navbar />
      <div className="w-full text-white flex-grow bg-gray-100 flex items-start justify-start">
        <div className="xl:basis-1/6 lg:basis-1/3 basis-1/3 bg-gray-100 h-full">
          <SideBar />
        </div>
        <div className="basis-5/6 p-3 bg-primary rounded-md text-black flex-grow  h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

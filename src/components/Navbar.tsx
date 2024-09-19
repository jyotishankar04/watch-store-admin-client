import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";

const Navbar = () => {
  const admin = useAppSelector((state: RootState) => state.adminReducer);

  return (
    <div className="w-full p-2 border-b-2 flex justify-between items-center pr-20">
      <Link to="/dashboard">
        <h1 className="text-2xl font-bold"> Admin Dashboard </h1>
      </Link>
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-3">
          <p className="text-md text-2xl"> Welcome, </p>
          <div className="">
            <p className="text-md text-2xl text-primary font-semibold">
              {" "}
              {admin.name}{" "}
            </p>
          </div>
          <a
            href={admin.profileImage}
            target="_blank"
            className="w-12 aspect-square flex justify-center items-center rounded-lg overflow-hidden"
          >
            <img
              src={admin.profileImage}
              alt="profile image"
              className="w-full h-full object-contain object-center"
            />
          </a>
        </div>
        <div>
          <Button variant={"destructive"}>Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

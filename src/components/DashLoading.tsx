import { memo } from "react";

const DashLoading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-100">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-4 border-y-yellow-500 border-primary "></div>
        <img
          src="https://tenor.com/view/running-run-cut-cat-gif-27004292.gif"
          className="rounded-full h-28 w-28"
        />
      </div>
    </div>
  );
};

export default memo(DashLoading);

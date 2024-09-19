import { Suspense } from "react";
import DashLoading from "./DashLoading";

const SuspenseComp = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<DashLoading />}>{children}</Suspense>;
};

export default SuspenseComp;

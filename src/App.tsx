import { Toaster } from "react-hot-toast";
import RouteManagement from "./lib/RouteManagement";
import QueryClientProvider from "./lib/QueryClientProvider";

const App = () => {
  return (
    <>
      <QueryClientProvider>
        <RouteManagement />
        <Toaster />
      </QueryClientProvider>
    </>
  );
};

export default App;

import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Outlet /> {/* <-- nested routes like Summary, Orders, etc. will render here */}
      </div>
    </div>
  );
};

export default Dashboard;

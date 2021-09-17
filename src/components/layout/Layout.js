import Sidebar from "./Sidebar";
import MainNavigation from "./MainNavigation";

import "./layout.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <MainNavigation />
      <div className="body">
        <Sidebar />
        <main className="main">{props.children}</main>
      </div>
    </div>
  );
};

export default Layout;

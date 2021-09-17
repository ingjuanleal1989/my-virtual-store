import { NavLink } from "react-router-dom";
import { FaCubes } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo-container center">
        <div className="logo center"></div>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/inventory" activeClassName="active">
              <FaCubes className="icon" />
              <span>Inventory</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/reporters" activeClassName="active">
              <VscGraph className="icon" />
              <span>Reporters</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

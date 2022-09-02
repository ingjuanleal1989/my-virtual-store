import { NavLink } from "react-router-dom";
import { FaCubes } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";

import "./sidebar.css";

const Sidebar = () => {
  const logoImage =
    "https://1000marcas.net/wp-content/uploads/2019/12/Tesla-logo.png";

  return (
    <div className="sidebar-container">
      <div className="logo-container">
        <img className="logo" alt="logo" src={logoImage} />
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
          <li>
            <NavLink to="/token2" activeClassName="active">
              <VscGraph className="icon" />
              <span>Token2</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

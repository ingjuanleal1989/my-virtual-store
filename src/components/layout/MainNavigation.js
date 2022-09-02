import { useHistory } from "react-router-dom";

import "./mainNavigation.css";

const MainNavigation = (props) => {
  const history = useHistory();

  const openManageUserPageHandle = () => history.push("/account");

  return (
    <div className="main-navigation-container">
      <div onClick={openManageUserPageHandle} className="user-avatar-container">
        <img
          className="user-avatar"
          alt="profilePicture"
          src={props.userImage}
        />
        <span>{props.userName}</span>
      </div>
      <button>Sign out</button>
    </div>
  );
};

export default MainNavigation;

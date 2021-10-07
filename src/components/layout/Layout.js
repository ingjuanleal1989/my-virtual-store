import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserData } from "../../redux";
import Sidebar from "./Sidebar";
import MainNavigation from "./MainNavigation";

import "./layout.css";
import { Fragment } from "react";

const Layout = (props) => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.account.loading);
  const userData = useSelector((state) => state.account.userData);
  const error = useSelector((state) => state.account.error);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div className="layout">
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <span>{error}</span>
      ) : (
        <Fragment>
          <MainNavigation userName={userData.name} userImage={userData.image} />
          <div className="body">
            <Sidebar />
            <main className="main">{props.children}</main>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Layout;

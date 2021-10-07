import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import Layout from "./components/layout/Layout";
import InventoryPage from "./pages/InventoryPage";
import NewInventoryItemPage from "./pages/NewInventoryItemPage";
import NotFound from "./pages/NotFound";
import ReportersPage from "./pages/ReportersPage";
import ManageAccountPage from "./pages/ManageAccountPage";

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/inventory" />
          </Route>
          <Route path="/inventory" exact>
            <InventoryPage />
          </Route>
          <Route path="/reporters">
            <ReportersPage />
          </Route>
          <Route path="/inventory/new-item">
            <NewInventoryItemPage />
          </Route>
          <Route path="/account">
            <ManageAccountPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Provider>
  );
};

export default App;

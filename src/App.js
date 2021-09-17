import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import InventoryPage from "./pages/InventoryPage";
import NewInventoryItem from "./pages/NewInventoryItem";
import NotFound from "./pages/NotFound";
import ReportersPage from "./pages/ReportersPage";

function App() {
  return (
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
        <Route path="/new-inventory-item">
          <NewInventoryItem />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

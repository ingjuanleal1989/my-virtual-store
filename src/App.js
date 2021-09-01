import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllProducts from "./pages/AllProducts";
import NewProduct from "./pages/NewProduct";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/products" />
        </Route>
        <Route path="/products" exact>
          <AllProducts />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
        <Route path="/new-product">
          <NewProduct />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

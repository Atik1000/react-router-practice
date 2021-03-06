import React, { useState } from 'react';
import "./App.css";
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  NavLink
} from "react-router-dom";
import Navbar from './components/Navbar';
import CreateProduct from './components/CreateProduct';
import UpdateProduct from './components/UpdateProduct';


const App = () => {
  const [item, setItem] = useState('');
  const onItemClicked = (data) => {
    setItem(data);
  }

  return (
    <>

      <Router>
        <Navbar />

        <Switch>

          <Route exact path={'/'}>
            {<Product onItemClicked={onItemClicked} />}
          </Route>
          <Route exact path={'/productDeteil/:id'}>
            <ProductDetail details={item} />

          </Route>
          <Route exact path={'/create'}>
            <CreateProduct />


          </Route>
          <Route exact path={'/update'}>
            <UpdateProduct />


          </Route>
          <Route exact path={'/404'}>
            <h1 className="not-found">404 PAGE NOT FOUND.........</h1>
          </Route>
          <Route path={'*'} render={() => <Redirect to='/404' />} />
        </Switch>


      </Router>
    </>

  );
};

export default App;
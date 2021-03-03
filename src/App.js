import React, { useState } from 'react';
import "./App.css";
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Navbar from './components/Navbar';

const App = () => {
  const [item, setItem] = useState('');
  const onItemClicked = (data) => {
    setItem(data);
  }

  return (
    <Router>
      <Switch>
        <Route exact path={'/'}>
          {<Product onItemClicked={onItemClicked} />}
        </Route>
        <Route exact path={'/productDeteil/:id'}>
          <ProductDetail details={item}  />
        </Route>
         <Route exact path={'/404'}>
          <h1 className="not-found">404 PAGE NOT FOUND.........</h1>
        </Route> 
         <Route path={'*'} render={() => <Redirect to='/404' />} /> 
      </Switch>

      {
        // item === '' ? <Product onItemClicked={onItemClicked} />
        // : <ProductDetail details={item} onBackBtn={onBackBtn} />
      }
    </Router>
  );
};

export default App;
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
  const onBackBtn = () => {
    setItem('');
  }
  return (
    <Router>
     <ul>
       <li> <Link to="/">Product Page</Link> </li>

       <li> <Link to="/productDeteil">Product Details</Link> </li>
     </ul>
      <Switch>
      
        <Route exact path={'/'}>
          {<Product onItemClicked={onItemClicked} />}
        </Route>
        <Route exact path={'/productDeteil'}>
          <ProductDetail details={item} onBackBtn={onBackBtn} />
        </Route>
        <Route exact path={'/404'}>

          <h1>404 NOT FOUND.........</h1>

        </Route>
        <Route path={'*'} render={() => <Redirect path={'/404'} />} />



      </Switch>

      {
        // item === '' ? <Product onItemClicked={onItemClicked} />
        // : <ProductDetail details={item} onBackBtn={onBackBtn} />
      }
    </Router>
  );
};

export default App;
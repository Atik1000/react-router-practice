import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import Loading from "./Loading";

const ProductDetail = (props) => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [found,setFound]=useState(null)

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.data);
        setLoading(false);
        setFound(err.data)
      });
  }, []);

  console.log(product);

  return (
    <div className="container">
      { loading === true ? (
        <div>
          <Loading />
        </div>
      ) 
      :
      found===undefined ? (
        <h1>Page Not Found</h1>
      ) :

      
      (
        <div className="container">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={product.image} alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5>Product Name: {product.title}</h5>
                  <p>
                    <strong>Description:</strong>
                    {product.description}
                  </p>
                  <p>
                    <strong>Description:</strong>
                    {product.category}
                  </p>
                  <p>Price: {product.price}</p>
                  <Link className="btn btn-primary" to="/">
                    back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

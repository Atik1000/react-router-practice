import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

export default function Product(props) {
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(true);
  const history = useHistory();
  const clickHandler = (id) => {
    history.push(`/productDeteil/${id}`);
  };
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct(res.data);
        setLoader(false);
        console.log(res.data, "==res data");
      })
      .catch((err) => {
        console.log(err.data, "==res.data");
      });
  }, []);

  return (
    <>
    
      <h2 className="mt-3 pt-3 pb-3 text-center ">Product page</h2>
      {loader ? (
        <Loading />
      ) : (
        product.map((product, id) => {
          return (
            <div key={id} onClick={() => props.onItemClicked(product)}>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="card">
                      <img
                        class="card-img-top"
                        src={product.image}
                        alt={product}
                      />
                      <div class="card-body">
                        <h5 class="card-title">{product.title}</h5>
                        <p class="card-text">{product.price}</p>
                        <button
                          onClick={() => clickHandler(product.id)}
                          class="btn btn-primary"
                        >
                          Go somewhere
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

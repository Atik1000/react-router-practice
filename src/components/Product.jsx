import React, { useState } from "react";
import {useHistory} from 'react-router-dom';


const Product = (props) => {
 
  const [product, setProduct] = useState([
    {
      id: 1,
      name: "Asus zenbook",
      price: "$120",
      description: "Awsome Laptop powered by Asus",
      categorY: "laptop",
    },
    {
      id: 2,
      name: "hp pavilion",
      price: "$100",
      description: "Awsome Laptop powered by hp",
      categorY: "laptop",
    },
    {
      id: 3,
      name: "macbook pro",
      price: "$220",
      description: "Awsome Laptop powered by Mac",
      categorY: "laptop",
    },
    {
      id: 4,
      name: "Dell inspiron",
      price: "$90",
      description: "Awsome Laptop powered by Dell",
      categorY: "laptop",
    },
    {
        id: 5,
        name: "Acer",
        price: "$70",
        description: "Awsome Laptop powered by Acer",
        categorY: "laptop",
      },
      {
        id: 6, 
        name: "Mi",
        price: "$75",
        description: "Awsome Laptop powered by xumi",
        categorY: "laptop",
      },
  ]);
  const history=useHistory();
  const  clickHandler =(id)=>{
  
    history.push(`/productDeteil/${id}`)

  }
  return (
    <div className="container">
      <h2 className="mt-3 pt-3 pb-3 text-center ">Product page</h2>
      {product.map((data, id) => {
        return (
          <div key={id} onClick={() => props.onItemClicked(data)}>
            <div class="card g-gradient-secondary text-dark">
              <div class="card-body">
                <h5 class="card-title text-danger">
                  {id + 1}: <b>product Name:</b> {data.name}{" "}
                  <button onClick={()=>clickHandler(data.id)} className="btn btn-info ">
                    Click Here more details
                  </button>
                </h5>
                <p class="card-text text-success">price :{data.price}.</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;

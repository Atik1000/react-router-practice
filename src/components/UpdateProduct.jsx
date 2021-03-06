import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const UpdateProduct = () => {
  let history = useHistory();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",  
    price: ""
  });
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategroy] = useState("");


  const onSubmit = async e => {
    e.preventDefault();
    axios.patch(`https://fakestoreapi.com/products/${id}`, name,description,price,category);
    history.push("/");
  };

  const loadProduct = async () => {
    const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update The Product</h2>
     
          <div className="form-group">
          <input
        type="text"
        class="form-control"
        placeholder="username"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
          </div>
          <div className="form-group">
          <input
        type="text"
        class="form-control"
        placeholder="username"
        value={description}
        onChange={(e) => {
            setDescription(e.target.value);
        }}
      ></input>
          </div>
          <div className="form-group">
          <input
        type="text"
        class="form-control"
        placeholder="username"
        value={price}
        onChange={(e) => {
            setPrice(e.target.value);
        }}
      ></input>
          </div>
          <div className="form-group">
          <input
        type="text"
        class="form-control"
        placeholder="username"
        value={category}
        onChange={(e) => {
            setCategroy(e.target.value);
        }}
      ></input>
          </div>
          <button onClick={onSubmit} className="btn btn-primary btn-block">Update product</button>
     
      </div>
    </div>
  );
};

export default UpdateProduct;
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategroy] = useState("");
  let history = useHistory();
   
  const submitData = () => {
    console.log(name, description, category, price);
    axios.post('https://fakestoreapi.com/products',{
        name,description,price,category

    })
    .then(res=>{
        console.log(res.data,'success');
    })
    .catch(err=>{
        console.log(err.response,'errror');
    })
  };
  const onSubmit = async e => {
    e.preventDefault();
    axios.post("https://fakestoreapi.com/products",  name,description,price,category);
    history.push("/");
  };
  
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Create Product</h2>
     
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
          <button onClick={submitData} className="btn btn-primary btn-block">Create product</button>
     
      </div>
    </div>
  );
};

export default CreateProduct;

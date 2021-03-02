import React, { useState } from 'react';

const Product = (props) => {
    const [product,setProduct]=useState([
        {
            id:1,
            name:'Asus zenbook',
            price:'$120',
            description:'Awsome Laptop powered by Asus',
            categorY:'laptop'
        },
        {
            id:2,
            name:'hp pavilion',
            price:'$100',
            description:'Awsome Laptop powered by hp',
            categorY:'laptop'
        },
        {
            id:3,
            name:'macbook pro',
            price:'$220',
            description:'Awsome Laptop powered by Mac',
            categorY:'laptop'
        },
        {
            id:4,
            name:'Dell inspiron',
            price:'$90',
            description:'Awsome Laptop powered by Dell',
            categorY:'laptop'
        },
    ])
    return (
        <div>
            <h2>Product page</h2>
            {
                product.map((data,id)=>{
                    return <p key={id} onClick={()=>props.onItemClicked(data)}>
                        {id+1} . <b>{data.name}</b>
                            {data.price}
                    </p>
                            
                })
            }
            
        </div>
    );
};

export default Product;
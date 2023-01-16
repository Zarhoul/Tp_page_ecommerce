import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Product() {
    const [products,SetProducts] = useState([]);
    useEffect(() => {axios.get("../data/products.json").then(res => SetProducts(res.data))},[]);

    return (
        <> 
        <div>
            {products.map((elem,index) => 
                <div key={index}>
                    <img src="" alt="..."/>
                    <div>
                        <h3>{elem.title}</h3>
                        <h5>{elem.currentPrice}</h5>
                        <button>Add to cart</button>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default Product
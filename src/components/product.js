import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Product() {
    const [products, SetProducts] = useState([]);
    useEffect(() => { axios.get("../data/myProducts.json").then(res => SetProducts(res.data)) }, []);

    return (
        <>
            <div>
                {products.map((elem, index) =>
                    <div key={index}>
                        <div>
                            <img src="" alt="..." />
                            <div>
                                {elem.state !== undefined ? elem.state : null}
                            </div>
                        </div>
                        <div>
                            <h3>{elem.title}</h3>
                            <h5>
                                {elem.oldPrice !== undefined ? elem.oldPrice : null}
                            </h5>
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
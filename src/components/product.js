import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.section`
        padding: 2em 5em;
        background: #FFFFFF;
        height: 50%;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-around;
    `;

    const Card = styled.div`
        background: #FFFFFF;
        border: 1px solid #afb0b4;
        border-radius: 4px;
        height: 18em;
        width: 14em;
        position: relative;
    `;

    const ImageWrapper = styled.div`
        height: 50%;
    `;
    
    const Image = styled.img`
        height: 100%;
        width: 100%;
    `;

    const Badge = styled.span`
        width: 30px;
        height: 10px;
        background-color: #222428;
        padding: 5px;
        border-radius: 4px;
        color: #fff;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 180px;
        top: 5px;
    `;

    const EmptyBadge = styled.span`
        visibility: hidden;
    `;

    const CardBody = styled.div`
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    `;

    const CardTitle = styled.div`
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    `;

    const CardPrice = styled.div`
        margin: 0;
        display: flex;
        flex-direction: row;
    `;

    const ItemOldPrice = styled.h5`
        margin: 0 2px;
        font-weight: 400;
        color: #717375;
        text-decoration: line-through;
    `;
    
    const ItemCurrentPrice = styled.h5`
        margin: 0 2px;
        font-weight: 500;
    `;

function Product() {
    const [products, SetProducts] = useState([]);
    useEffect(() => { axios.get("../data/myProducts.json").then(res => SetProducts(res.data)) }, []);

    return (
            <Wrapper>
                {products.map((elem, index) =>
                    <Card key={index}>
                        <ImageWrapper>
                            <Image src={elem.image} alt="Product image" />
                            <Badge key={index}>
                                {elem.state !== undefined ? elem.state : <EmptyBadge />}
                            </Badge>
                        </ImageWrapper>
                        <CardBody>
                            <CardTitle>{elem.title}</CardTitle>
                            <CardPrice>
                                <ItemOldPrice>
                                    {elem.oldPrice !== undefined ? elem.oldPrice : null}
                                </ItemOldPrice>
                                <ItemCurrentPrice>{elem.currentPrice}</ItemCurrentPrice>
                            </CardPrice>
                            <button>Add to cart</button>
                        </CardBody>
                    </Card>
                )}
            </Wrapper>
    )
}

export default Product
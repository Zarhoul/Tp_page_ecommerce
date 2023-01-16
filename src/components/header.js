import React from 'react'
import styled from 'styled-components'

function Header() {
    const Wrapper = styled.div`
    background-color:#f8f9fb;
    width:100wh;
    height :80px
    display: flex;
    flex-direction:coloumn;
    `
    const list = styled.ul`
    list-style : none;
    display : flex;

    `
    return (
        <Wrapper>
            <div className="logo">
                <h1>Start Bootstrapp</h1>
            </div>
            <div className="navbar">
                <ul>
                    <li className="link">Home </li>
                    <li className="link">About</li>
                    <li className="link">
                        <select name="" id="">
                            <option value="Shop">Shop</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className="cart">
                <button>
                    <i></i>
                    cart
                </button>
            </div>
        </Wrapper>
    )
}

export default Header
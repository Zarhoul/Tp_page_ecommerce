import React from 'react'

function Header() {
    return (
        <div>
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
        </div>
    )
}

export default Header
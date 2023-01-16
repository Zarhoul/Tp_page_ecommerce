import React from 'react'

function header() {
    return (
        <div>
            <div className="logo">
                <h1>Start Bootstrapp</h1>
            </div>
            <div className="navbar">
                <ul>
                    <li className="a">Home </li>
                    <li className="a">About</li>
                    <li className="a"><select name="" id="">
                        <option value="Shop">Shop</option></select> </li>
                </ul>
            </div>
            <div className="cart">
                <button>
                    <i></i>
                    cart
                    ()
                </button>
            </div>
        </div>
    )
}

export default header
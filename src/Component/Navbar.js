import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {

    const items = useSelector((state) => state.cart_item.api_data)
    return (
        <><div style={{ display: "flex", alignItems: "space-between" }}>
            <span className='logo'>REDUX STORE</span>
            <div>
                <Link className='navLink' to="/">Home</Link>
                <Link className='navLink' to="/cart">Cart</Link>

                <span className='cartCount'> Cart Item : {items.length} </span>
            </div>
        </div>
        </>
    )
}

export default Navbar
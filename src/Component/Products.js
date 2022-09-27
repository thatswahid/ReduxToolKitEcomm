import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../Store/CartSlice'

function Products() {
    const [Products, setProducts] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchProducts = async () => {

            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json();
            console.log(data);
            setProducts(data)
        }
        fetchProducts();
    }, [])


    function addData(prdt) {

        dispatch(add({

            id: prdt.id,
            image: prdt.image,
            title: prdt.title,
            price: prdt.price,
            qty: 1,


        }))
    }


    return (
        <>
            <div className="productsWrapper">
                {Products.length == 0 ? (
                    <h1>loading... </h1>
                ) :
                    Products.map((products) => (
                        <div className="card" key={products.id}>
                            <img src={products.image} alt="" />
                            <h4>{products.title}</h4>
                            <h5>{products.price}</h5>
                            <button className="btn" onClick={() => addData(products)}>Add To Cart</button>

                        </div>
                    ))

                }
            </div>
        </>
    )
}

export default Products
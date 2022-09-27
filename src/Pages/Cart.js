import React , {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Remove , inc } from '../Store/CartSlice'

function Cart() {
  const products = useSelector((state) => state.cart_item.api_data);
  const dispatchData = useDispatch()

  function handlDelete(id) {
    // console.log(products)
    var filtredData = products.filter((i) => i.id !== id);
    dispatchData(Remove(filtredData))
  }
  function Increment(items) {
    var index = products.findIndex((i) => i.id === items.id);
    dispatchData(inc(index))
    console.log(index)
    priceCal()
  }
  var TotalPrice = 0;
  function priceCal() {
  
    if (products.length !== 0) {
      products.map((i) => TotalPrice = i.price * i.qty + TotalPrice);
    
    }
  }
  useEffect(() => {
    try {
      priceCal()
    }catch (e) {
      // erro object 
    }
  },[])
 
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {
          products.map((items) => (
            <div className="cartCard">
              <img src={items.image} alt="" />
              <h5>{items.title}</h5>
              {/* <h1>{items.qty}</h1> */}
              <h5>{items.price} * {`${items.qty}`}  = {items.qty * items.price} Total </h5>
              <button onClick={() => Increment(items)}>Inc</button>
              <button className='btn' onClick={() => handlDelete(items.id)}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart